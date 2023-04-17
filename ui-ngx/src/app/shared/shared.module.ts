///
/// Copyright © 2016-2023 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FooterComponent } from '@shared/components/footer.component';
import { LogoComponent } from '@shared/components/logo.component';
import { TbSnackBarComponent, ToastDirective } from '@shared/components/toast.directive';
import { BreadcrumbComponent } from '@shared/components/breadcrumb.component';
import { FlowInjectionToken, NgxFlowModule } from '@flowjs/ngx-flow';
import { NgxFlowchartModule } from 'ngx-flowchart';
import Flow from '@flowjs/flow.js';

import { MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_SELECT_CONFIG, MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { DatetimeAdapter, MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { GridsterModule } from 'angular-gridster2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareModule as ShareButtonsModule } from 'ngx-sharebuttons';
import { HotkeyModule } from 'angular2-hotkeys';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { UserMenuComponent } from '@shared/components/user-menu.component';
import { NospacePipe } from '@shared/pipe/nospace.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { TbCheckboxComponent } from '@shared/components/tb-checkbox.component';
import { HelpComponent } from '@shared/components/help.component';
import { TbAnchorComponent } from '@shared/components/tb-anchor.component';
import { MillisecondsToTimeStringPipe } from '@shared/pipe/milliseconds-to-time-string.pipe';
import { TimewindowComponent } from '@shared/components/time/timewindow.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TimewindowPanelComponent } from '@shared/components/time/timewindow-panel.component';
import { TimeintervalComponent } from '@shared/components/time/timeinterval.component';
import { DatetimePeriodComponent } from '@shared/components/time/datetime-period.component';
import { EnumToArrayPipe } from '@shared/pipe/enum-to-array.pipe';
import { ClipboardModule } from 'ngx-clipboard';
import { ValueInputComponent } from '@shared/components/value-input.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { MarkdownEditorComponent } from '@shared/components/markdown-editor.component';
import { FullscreenDirective } from '@shared/components/fullscreen.directive';
import { HighlightPipe } from '@shared/pipe/highlight.pipe';
import { DashboardAutocompleteComponent } from '@shared/components/dashboard-autocomplete.component';
import { DashboardStateAutocompleteComponent } from '@shared/components/dashboard-state-autocomplete.component';
import { EntitySubTypeAutocompleteComponent } from '@shared/components/entity/entity-subtype-autocomplete.component';
import { EntitySubTypeSelectComponent } from '@shared/components/entity/entity-subtype-select.component';
import { EntityAutocompleteComponent } from '@shared/components/entity/entity-autocomplete.component';
import { EntityListComponent } from '@shared/components/entity/entity-list.component';
import { EntityTypeSelectComponent } from '@shared/components/entity/entity-type-select.component';
import { EntitySelectComponent } from '@shared/components/entity/entity-select.component';
import { DatetimeComponent } from '@shared/components/time/datetime.component';
import { EntityKeysListComponent } from '@shared/components/entity/entity-keys-list.component';
import { SocialSharePanelComponent } from '@shared/components/socialshare-panel.component';
import { StringItemsListComponent } from '@shared/components/string-items-list.component';
import { RelationTypeAutocompleteComponent } from '@shared/components/relation/relation-type-autocomplete.component';
import { EntityListSelectComponent } from '@shared/components/entity/entity-list-select.component';
import { JsonObjectEditComponent } from '@shared/components/json-object-edit.component';
import { JsonObjectViewComponent, } from '@shared/components/json-object-view.component';
import { FooterFabButtonsComponent } from '@shared/components/footer-fab-buttons.component';
import { CircularProgressDirective } from '@shared/components/circular-progress.directive';
import {
  FabActionsDirective,
  FabToolbarComponent,
  FabTriggerDirective
} from '@shared/components/fab-toolbar.component';
import { DashboardSelectPanelComponent } from '@shared/components/dashboard-select-panel.component';
import { DashboardSelectComponent } from '@shared/components/dashboard-select.component';
import { WidgetsBundleSelectComponent } from '@shared/components/widgets-bundle-select.component';
import { KeyboardShortcutPipe } from '@shared/pipe/keyboard-shortcut.pipe';
import { TbErrorComponent } from '@shared/components/tb-error.component';
import { EntityTypeListComponent } from '@shared/components/entity/entity-type-list.component';
import { EntitySubTypeListComponent } from '@shared/components/entity/entity-subtype-list.component';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { TbJsonPipe } from '@shared/pipe/tbJson.pipe';
import { ColorPickerDialogComponent } from '@shared/components/dialog/color-picker-dialog.component';
import { ColorInputComponent } from '@shared/components/color-input.component';
import { JsFuncComponent } from '@shared/components/js-func.component';
import { JsonFormComponent } from '@shared/components/json-form/json-form.component';
import { ConfirmDialogComponent } from '@shared/components/dialog/confirm-dialog.component';
import { AlertDialogComponent } from '@shared/components/dialog/alert-dialog.component';
import { TodoDialogComponent } from '@shared/components/dialog/todo-dialog.component';
import { MaterialIconsDialogComponent } from '@shared/components/dialog/material-icons-dialog.component';
import { MaterialIconSelectComponent } from '@shared/components/material-icon-select.component';
import { ImageInputComponent } from '@shared/components/image-input.component';
import { FileInputComponent } from '@shared/components/file-input.component';
import { NodeScriptTestDialogComponent } from '@shared/components/dialog/node-script-test-dialog.component';
import { MessageTypeAutocompleteComponent } from '@shared/components/message-type-autocomplete.component';
import { JsonContentComponent } from '@shared/components/json-content.component';
import { KeyValMapComponent } from '@shared/components/kv-map.component';
import { TbCheatSheetComponent } from '@shared/components/cheatsheet.component';
import { TbHotkeysDirective } from '@shared/components/hotkeys.directive';
import { NavTreeComponent } from '@shared/components/nav-tree.component';
import { LedLightComponent } from '@shared/components/led-light.component';
import { TbJsonToStringDirective } from '@shared/components/directives/tb-json-to-string.directive';
import { JsonObjectEditDialogComponent } from '@shared/components/dialog/json-object-edit-dialog.component';
import { HistorySelectorComponent } from '@shared/components/time/history-selector/history-selector.component';
import { EntityGatewaySelectComponent } from '@shared/components/entity/entity-gateway-select.component';
import { DndModule } from 'ngx-drag-drop';
import { QueueAutocompleteComponent } from '@shared/components/queue/queue-autocomplete.component';
import { ContactComponent } from '@shared/components/contact.component';
import { TimezoneSelectComponent } from '@shared/components/time/timezone-select.component';
import { FileSizePipe } from '@shared/pipe/file-size.pipe';
import { WidgetsBundleSearchComponent } from '@shared/components/widgets-bundle-search.component';
import { SelectableColumnsPipe } from '@shared/pipe/selectable-columns.pipe';
import { QuickTimeIntervalComponent } from '@shared/components/time/quick-time-interval.component';
import { OtaPackageAutocompleteComponent } from '@shared/components/ota-package/ota-package-autocomplete.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CopyButtonComponent } from '@shared/components/button/copy-button.component';
import { TogglePasswordComponent } from '@shared/components/button/toggle-password.component';
import { HelpPopupComponent } from '@shared/components/help-popup.component';
import { TbPopoverComponent, TbPopoverDirective } from '@shared/components/popover.component';
import { TbStringTemplateOutletDirective } from '@shared/components/directives/sring-template-outlet.directive';
import { TbComponentOutletDirective } from '@shared/components/directives/component-outlet.directive';
import { HelpMarkdownComponent } from '@shared/components/help-markdown.component';
import { MarkedOptionsService } from '@shared/components/marked-options.service';
import { TbPopoverService } from '@shared/components/popover.service';
import { HELP_MARKDOWN_COMPONENT_TOKEN, SHARED_MODULE_TOKEN } from '@shared/components/tokens';
import { TbMarkdownComponent } from '@shared/components/markdown.component';
import { ProtobufContentComponent } from '@shared/components/protobuf-content.component';
import { CssComponent } from '@shared/components/css.component';
import { HtmlComponent } from '@shared/components/html.component';
import { SafePipe } from '@shared/pipe/safe.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MultipleImageInputComponent } from '@shared/components/multiple-image-input.component';
import { BranchAutocompleteComponent } from '@shared/components/vc/branch-autocomplete.component';
import { PhoneInputComponent } from '@shared/components/phone-input.component';
import { CustomDateAdapter } from '@shared/adapter/custom-datatime-adapter';
import { CustomPaginatorIntl } from '@shared/services/custom-paginator-intl';
import { TbScriptLangComponent } from '@shared/components/script-lang.component';
import { NotificationComponent } from '@shared/components/notification/notification.component';
import { TemplateAutocompleteComponent } from '@shared/components/notification/template-autocomplete.component';
import { SlackConversationAutocompleteComponent } from '@shared/components/slack-conversation-autocomplete.component';
import { DateAgoPipe } from '@shared/pipe/date-ago.pipe';
import {
  TbBreakPointsProvider,
  MdLgLayoutDirective,
  MdLgLayoutAlignDirective,
  MdLgLayoutGapDirective,
  MdLgShowHideDirective,
  GtMdLgLayoutDirective,
  GtMdLgLayoutAlignDirective,
  GtMdLgLayoutGapDirective,
  GtMdLgShowHideDirective
} from '@shared/layout/layout.directives';
import { ColorPickerComponent } from '@shared/components/color-picker/color-picker.component';

export function MarkedOptionsFactory(markedOptionsService: MarkedOptionsService) {
  return markedOptionsService;
}

@NgModule({
  providers: [
    DatePipe,
    MillisecondsToTimeStringPipe,
    EnumToArrayPipe,
    HighlightPipe,
    TruncatePipe,
    TbJsonPipe,
    FileSizePipe,
    DateAgoPipe,
    SafePipe,
    DateAgoPipe,
    {
      provide: FlowInjectionToken,
      useValue: Flow
    },
    {
      provide: TINYMCE_SCRIPT_SRC,
      useValue: 'assets/tinymce/tinymce.min.js'
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB'
    },
    { provide: DatetimeAdapter, useClass: CustomDateAdapter },
    { provide: HELP_MARKDOWN_COMPONENT_TOKEN, useValue: HelpMarkdownComponent },
    { provide: SHARED_MODULE_TOKEN, useValue: SharedModule },
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl },
    TbPopoverService,
    {
      provide: MAT_SELECT_CONFIG,
      useValue: {
        overlayPanelClass: 'tb-select-overlay',
        hideSingleSelectionIndicator: true
      }
    },
    {
      provide: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
      useValue: {
        hideSingleSelectionIndicator: true
      }
    },
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        disableTooltipInteractivity: true
      }
    },
    TbBreakPointsProvider
  ],
  declarations: [
    FooterComponent,
    LogoComponent,
    FooterFabButtonsComponent,
    ToastDirective,
    FullscreenDirective,
    CircularProgressDirective,
    TbHotkeysDirective,
    TbAnchorComponent,
    TbPopoverComponent,
    TbStringTemplateOutletDirective,
    TbComponentOutletDirective,
    TbPopoverDirective,
    TbMarkdownComponent,
    HelpComponent,
    HelpMarkdownComponent,
    HelpPopupComponent,
    TbCheckboxComponent,
    TbSnackBarComponent,
    TbErrorComponent,
    TbCheatSheetComponent,
    BreadcrumbComponent,
    UserMenuComponent,
    TimewindowComponent,
    TimewindowPanelComponent,
    TimeintervalComponent,
    QuickTimeIntervalComponent,
    DashboardSelectComponent,
    DashboardSelectPanelComponent,
    DatetimePeriodComponent,
    DatetimeComponent,
    TimezoneSelectComponent,
    ValueInputComponent,
    DashboardAutocompleteComponent,
    DashboardStateAutocompleteComponent,
    EntitySubTypeAutocompleteComponent,
    EntitySubTypeSelectComponent,
    EntitySubTypeListComponent,
    EntityAutocompleteComponent,
    EntityListComponent,
    EntityTypeSelectComponent,
    EntitySelectComponent,
    EntityKeysListComponent,
    EntityListSelectComponent,
    EntityTypeListComponent,
    QueueAutocompleteComponent,
    RelationTypeAutocompleteComponent,
    SocialSharePanelComponent,
    StringItemsListComponent,
    JsonObjectEditComponent,
    JsonObjectViewComponent,
    JsonContentComponent,
    JsFuncComponent,
    CssComponent,
    HtmlComponent,
    FabTriggerDirective,
    FabActionsDirective,
    FabToolbarComponent,
    WidgetsBundleSelectComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
    TodoDialogComponent,
    ColorPickerDialogComponent,
    MaterialIconsDialogComponent,
    ColorInputComponent,
    MaterialIconSelectComponent,
    NodeScriptTestDialogComponent,
    JsonFormComponent,
    ImageInputComponent,
    MultipleImageInputComponent,
    FileInputComponent,
    MessageTypeAutocompleteComponent,
    KeyValMapComponent,
    NavTreeComponent,
    LedLightComponent,
    MarkdownEditorComponent,
    NospacePipe,
    MillisecondsToTimeStringPipe,
    EnumToArrayPipe,
    HighlightPipe,
    TruncatePipe,
    TbJsonPipe,
    FileSizePipe,
    DateAgoPipe,
    SafePipe,
    SelectableColumnsPipe,
    KeyboardShortcutPipe,
    TbJsonToStringDirective,
    JsonObjectEditDialogComponent,
    HistorySelectorComponent,
    EntityGatewaySelectComponent,
    ContactComponent,
    OtaPackageAutocompleteComponent,
    WidgetsBundleSearchComponent,
    CopyButtonComponent,
    TogglePasswordComponent,
    ProtobufContentComponent,
    BranchAutocompleteComponent,
    PhoneInputComponent,
    TbScriptLangComponent,
    NotificationComponent,
    TemplateAutocompleteComponent,
    SlackConversationAutocompleteComponent,
    DateAgoPipe,
    MdLgLayoutDirective,
    MdLgLayoutAlignDirective,
    MdLgLayoutGapDirective,
    MdLgShowHideDirective,
    GtMdLgLayoutDirective,
    GtMdLgLayoutAlignDirective,
    GtMdLgLayoutGapDirective,
    GtMdLgShowHideDirective,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTabsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDatetimeModule,
    MatDatetimepickerModule,
    NgxDaterangepickerMd.forRoot(),
    MatSliderModule,
    MatExpansionModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatListModule,
    DragDropModule,
    GridsterModule,
    ClipboardModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    ShareButtonsModule,
    HotkeyModule,
    ColorPickerModule,
    NgxHmCarouselModule,
    DndModule,
    NgxFlowModule,
    NgxFlowchartModule,
    // ngx-markdown
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: MarkedOptionsFactory,
        deps: [MarkedOptionsService]
      }
    })
  ],
  exports: [
    FooterComponent,
    LogoComponent,
    FooterFabButtonsComponent,
    ToastDirective,
    FullscreenDirective,
    CircularProgressDirective,
    TbHotkeysDirective,
    TbAnchorComponent,
    TbStringTemplateOutletDirective,
    TbComponentOutletDirective,
    TbPopoverDirective,
    TbMarkdownComponent,
    HelpComponent,
    HelpMarkdownComponent,
    HelpPopupComponent,
    TbCheckboxComponent,
    TbErrorComponent,
    TbCheatSheetComponent,
    BreadcrumbComponent,
    UserMenuComponent,
    TimewindowComponent,
    TimewindowPanelComponent,
    TimeintervalComponent,
    QuickTimeIntervalComponent,
    DashboardSelectComponent,
    DatetimePeriodComponent,
    DatetimeComponent,
    TimezoneSelectComponent,
    DashboardAutocompleteComponent,
    DashboardStateAutocompleteComponent,
    EntitySubTypeAutocompleteComponent,
    EntitySubTypeSelectComponent,
    EntitySubTypeListComponent,
    EntityAutocompleteComponent,
    EntityListComponent,
    EntityTypeSelectComponent,
    EntitySelectComponent,
    EntityKeysListComponent,
    EntityListSelectComponent,
    EntityTypeListComponent,
    QueueAutocompleteComponent,
    RelationTypeAutocompleteComponent,
    SocialSharePanelComponent,
    StringItemsListComponent,
    JsonObjectEditComponent,
    JsonObjectViewComponent,
    JsonContentComponent,
    JsFuncComponent,
    CssComponent,
    HtmlComponent,
    FabTriggerDirective,
    FabActionsDirective,
    TbJsonToStringDirective,
    FabToolbarComponent,
    WidgetsBundleSelectComponent,
    ValueInputComponent,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTabsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDatetimeModule,
    MatDatetimepickerModule,
    NgxDaterangepickerMd,
    MatSliderModule,
    MatExpansionModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatListModule,
    DragDropModule,
    GridsterModule,
    ClipboardModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    ShareButtonsModule,
    HotkeyModule,
    ColorPickerModule,
    NgxHmCarouselModule,
    EditorModule,
    DndModule,
    NgxFlowchartModule,
    MarkdownModule,
    ConfirmDialogComponent,
    AlertDialogComponent,
    TodoDialogComponent,
    ColorPickerDialogComponent,
    MaterialIconsDialogComponent,
    ColorInputComponent,
    MaterialIconSelectComponent,
    NodeScriptTestDialogComponent,
    JsonFormComponent,
    ImageInputComponent,
    MultipleImageInputComponent,
    FileInputComponent,
    MessageTypeAutocompleteComponent,
    KeyValMapComponent,
    NavTreeComponent,
    LedLightComponent,
    MarkdownEditorComponent,
    NospacePipe,
    MillisecondsToTimeStringPipe,
    EnumToArrayPipe,
    HighlightPipe,
    TruncatePipe,
    TbJsonPipe,
    KeyboardShortcutPipe,
    FileSizePipe,
    DateAgoPipe,
    SafePipe,
    SelectableColumnsPipe,
    RouterModule,
    TranslateModule,
    JsonObjectEditDialogComponent,
    HistorySelectorComponent,
    EntityGatewaySelectComponent,
    ContactComponent,
    OtaPackageAutocompleteComponent,
    WidgetsBundleSearchComponent,
    CopyButtonComponent,
    TogglePasswordComponent,
    ProtobufContentComponent,
    BranchAutocompleteComponent,
    PhoneInputComponent,
    TbScriptLangComponent,
    NotificationComponent,
    TemplateAutocompleteComponent,
    SlackConversationAutocompleteComponent,
    DateAgoPipe,
    MdLgLayoutDirective,
    MdLgLayoutAlignDirective,
    MdLgLayoutGapDirective,
    MdLgShowHideDirective,
    GtMdLgLayoutDirective,
    GtMdLgLayoutAlignDirective,
    GtMdLgLayoutGapDirective,
    GtMdLgShowHideDirective,
    ColorPickerComponent
  ]
})
export class SharedModule { }
