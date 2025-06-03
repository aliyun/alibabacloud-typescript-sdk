// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartCloudRecordShrinkRequestBackgrounds } from "./StartCloudRecordShrinkRequestBackgrounds";
import { StartCloudRecordShrinkRequestBgColor } from "./StartCloudRecordShrinkRequestBgColor";
import { StartCloudRecordShrinkRequestClockWidgets } from "./StartCloudRecordShrinkRequestClockWidgets";
import { StartCloudRecordShrinkRequestImages } from "./StartCloudRecordShrinkRequestImages";
import { StartCloudRecordShrinkRequestPanes } from "./StartCloudRecordShrinkRequestPanes";
import { StartCloudRecordShrinkRequestRegionColor } from "./StartCloudRecordShrinkRequestRegionColor";
import { StartCloudRecordShrinkRequestStorageConfig } from "./StartCloudRecordShrinkRequestStorageConfig";
import { StartCloudRecordShrinkRequestTexts } from "./StartCloudRecordShrinkRequestTexts";


export class StartCloudRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * appId
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartCloudRecordShrinkRequestBackgrounds[];
  bgColor?: StartCloudRecordShrinkRequestBgColor;
  /**
   * @remarks
   * channelName
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartCloudRecordShrinkRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartCloudRecordShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  /**
   * @remarks
   * panes
   */
  panes?: StartCloudRecordShrinkRequestPanes[];
  regionColor?: StartCloudRecordShrinkRequestRegionColor;
  reservePaneForNoCameraUser?: boolean;
  showDefaultBackgroundOnMute?: boolean;
  /**
   * @remarks
   * storageConfig
   * 
   * This parameter is required.
   */
  storageConfig?: StartCloudRecordShrinkRequestStorageConfig;
  subHighResolutionStream?: boolean;
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * templateId
   * 
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartCloudRecordShrinkRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      bgColor: 'BgColor',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      layoutSpecifiedUsersShrink: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      regionColor: 'RegionColor',
      reservePaneForNoCameraUser: 'ReservePaneForNoCameraUser',
      showDefaultBackgroundOnMute: 'ShowDefaultBackgroundOnMute',
      storageConfig: 'StorageConfig',
      subHighResolutionStream: 'SubHighResolutionStream',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestBackgrounds },
      bgColor: StartCloudRecordShrinkRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestPanes },
      regionColor: StartCloudRecordShrinkRequestRegionColor,
      reservePaneForNoCameraUser: 'boolean',
      showDefaultBackgroundOnMute: 'boolean',
      storageConfig: StartCloudRecordShrinkRequestStorageConfig,
      subHighResolutionStream: 'boolean',
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordShrinkRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
    }
    if(this.bgColor && typeof (this.bgColor as any).validate === 'function') {
      (this.bgColor as any).validate();
    }
    if(Array.isArray(this.clockWidgets)) {
      $dara.Model.validateArray(this.clockWidgets);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    if(this.regionColor && typeof (this.regionColor as any).validate === 'function') {
      (this.regionColor as any).validate();
    }
    if(this.storageConfig && typeof (this.storageConfig as any).validate === 'function') {
      (this.storageConfig as any).validate();
    }
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

