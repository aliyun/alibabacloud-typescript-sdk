// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartCloudRecordRequestBackgrounds } from "./StartCloudRecordRequestBackgrounds";
import { StartCloudRecordRequestBgColor } from "./StartCloudRecordRequestBgColor";
import { StartCloudRecordRequestClockWidgets } from "./StartCloudRecordRequestClockWidgets";
import { StartCloudRecordRequestImages } from "./StartCloudRecordRequestImages";
import { StartCloudRecordRequestLayoutSpecifiedUsers } from "./StartCloudRecordRequestLayoutSpecifiedUsers";
import { StartCloudRecordRequestPanes } from "./StartCloudRecordRequestPanes";
import { StartCloudRecordRequestRegionColor } from "./StartCloudRecordRequestRegionColor";
import { StartCloudRecordRequestStorageConfig } from "./StartCloudRecordRequestStorageConfig";
import { StartCloudRecordRequestTexts } from "./StartCloudRecordRequestTexts";


export class StartCloudRecordRequest extends $dara.Model {
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
  backgrounds?: StartCloudRecordRequestBackgrounds[];
  bgColor?: StartCloudRecordRequestBgColor;
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
  clockWidgets?: StartCloudRecordRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartCloudRecordRequestImages[];
  layoutSpecifiedUsers?: StartCloudRecordRequestLayoutSpecifiedUsers;
  /**
   * @remarks
   * panes
   */
  panes?: StartCloudRecordRequestPanes[];
  regionColor?: StartCloudRecordRequestRegionColor;
  reservePaneForNoCameraUser?: boolean;
  showDefaultBackgroundOnMute?: boolean;
  /**
   * @remarks
   * storageConfig
   * 
   * This parameter is required.
   */
  storageConfig?: StartCloudRecordRequestStorageConfig;
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
  texts?: StartCloudRecordRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      bgColor: 'BgColor',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      cropMode: 'CropMode',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
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
      backgrounds: { 'type': 'array', 'itemType': StartCloudRecordRequestBackgrounds },
      bgColor: StartCloudRecordRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartCloudRecordRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartCloudRecordRequestImages },
      layoutSpecifiedUsers: StartCloudRecordRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': StartCloudRecordRequestPanes },
      regionColor: StartCloudRecordRequestRegionColor,
      reservePaneForNoCameraUser: 'boolean',
      showDefaultBackgroundOnMute: 'boolean',
      storageConfig: StartCloudRecordRequestStorageConfig,
      subHighResolutionStream: 'boolean',
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartCloudRecordRequestTexts },
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
    if(this.layoutSpecifiedUsers && typeof (this.layoutSpecifiedUsers as any).validate === 'function') {
      (this.layoutSpecifiedUsers as any).validate();
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

