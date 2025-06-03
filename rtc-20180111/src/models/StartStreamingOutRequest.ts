// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartStreamingOutRequestBackgrounds } from "./StartStreamingOutRequestBackgrounds";
import { StartStreamingOutRequestBgColor } from "./StartStreamingOutRequestBgColor";
import { StartStreamingOutRequestClockWidgets } from "./StartStreamingOutRequestClockWidgets";
import { StartStreamingOutRequestImages } from "./StartStreamingOutRequestImages";
import { StartStreamingOutRequestLayoutSpecifiedUsers } from "./StartStreamingOutRequestLayoutSpecifiedUsers";
import { StartStreamingOutRequestPanes } from "./StartStreamingOutRequestPanes";
import { StartStreamingOutRequestRegionColor } from "./StartStreamingOutRequestRegionColor";
import { StartStreamingOutRequestTexts } from "./StartStreamingOutRequestTexts";


export class StartStreamingOutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartStreamingOutRequestBackgrounds[];
  bgColor?: StartStreamingOutRequestBgColor;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartStreamingOutRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartStreamingOutRequestImages[];
  layoutSpecifiedUsers?: StartStreamingOutRequestLayoutSpecifiedUsers;
  panes?: StartStreamingOutRequestPanes[];
  regionColor?: StartStreamingOutRequestRegionColor;
  reservePaneForNoCameraUser?: boolean;
  showDefaultBackgroundOnMute?: boolean;
  startWithoutChannel?: boolean;
  /**
   * @example
   * 30
   */
  startWithoutChannelWaitTime?: number;
  subHighResolutionStream?: boolean;
  /**
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 567
   */
  templateId?: string;
  texts?: StartStreamingOutRequestTexts[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp://example.com/live/stream
   */
  url?: string;
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
      startWithoutChannel: 'StartWithoutChannel',
      startWithoutChannelWaitTime: 'StartWithoutChannelWaitTime',
      subHighResolutionStream: 'SubHighResolutionStream',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutRequestBackgrounds },
      bgColor: StartStreamingOutRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartStreamingOutRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartStreamingOutRequestImages },
      layoutSpecifiedUsers: StartStreamingOutRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': StartStreamingOutRequestPanes },
      regionColor: StartStreamingOutRequestRegionColor,
      reservePaneForNoCameraUser: 'boolean',
      showDefaultBackgroundOnMute: 'boolean',
      startWithoutChannel: 'boolean',
      startWithoutChannelWaitTime: 'number',
      subHighResolutionStream: 'boolean',
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutRequestTexts },
      url: 'string',
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
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

