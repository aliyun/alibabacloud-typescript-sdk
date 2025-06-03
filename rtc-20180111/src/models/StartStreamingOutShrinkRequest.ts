// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartStreamingOutShrinkRequestBackgrounds } from "./StartStreamingOutShrinkRequestBackgrounds";
import { StartStreamingOutShrinkRequestBgColor } from "./StartStreamingOutShrinkRequestBgColor";
import { StartStreamingOutShrinkRequestClockWidgets } from "./StartStreamingOutShrinkRequestClockWidgets";
import { StartStreamingOutShrinkRequestImages } from "./StartStreamingOutShrinkRequestImages";
import { StartStreamingOutShrinkRequestPanes } from "./StartStreamingOutShrinkRequestPanes";
import { StartStreamingOutShrinkRequestRegionColor } from "./StartStreamingOutShrinkRequestRegionColor";
import { StartStreamingOutShrinkRequestTexts } from "./StartStreamingOutShrinkRequestTexts";


export class StartStreamingOutShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: StartStreamingOutShrinkRequestBackgrounds[];
  bgColor?: StartStreamingOutShrinkRequestBgColor;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: StartStreamingOutShrinkRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: StartStreamingOutShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  panes?: StartStreamingOutShrinkRequestPanes[];
  regionColor?: StartStreamingOutShrinkRequestRegionColor;
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
  texts?: StartStreamingOutShrinkRequestTexts[];
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
      layoutSpecifiedUsersShrink: 'LayoutSpecifiedUsers',
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
      backgrounds: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestBackgrounds },
      bgColor: StartStreamingOutShrinkRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestPanes },
      regionColor: StartStreamingOutShrinkRequestRegionColor,
      reservePaneForNoCameraUser: 'boolean',
      showDefaultBackgroundOnMute: 'boolean',
      startWithoutChannel: 'boolean',
      startWithoutChannelWaitTime: 'number',
      subHighResolutionStream: 'boolean',
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': StartStreamingOutShrinkRequestTexts },
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

