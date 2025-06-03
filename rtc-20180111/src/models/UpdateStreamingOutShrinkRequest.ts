// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateStreamingOutShrinkRequestBackgrounds } from "./UpdateStreamingOutShrinkRequestBackgrounds";
import { UpdateStreamingOutShrinkRequestBgColor } from "./UpdateStreamingOutShrinkRequestBgColor";
import { UpdateStreamingOutShrinkRequestClockWidgets } from "./UpdateStreamingOutShrinkRequestClockWidgets";
import { UpdateStreamingOutShrinkRequestImages } from "./UpdateStreamingOutShrinkRequestImages";
import { UpdateStreamingOutShrinkRequestPanes } from "./UpdateStreamingOutShrinkRequestPanes";
import { UpdateStreamingOutShrinkRequestRegionColor } from "./UpdateStreamingOutShrinkRequestRegionColor";
import { UpdateStreamingOutShrinkRequestTexts } from "./UpdateStreamingOutShrinkRequestTexts";


export class UpdateStreamingOutShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: UpdateStreamingOutShrinkRequestBackgrounds[];
  bgColor?: UpdateStreamingOutShrinkRequestBgColor;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateStreamingOutShrinkRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: UpdateStreamingOutShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  panes?: UpdateStreamingOutShrinkRequestPanes[];
  regionColor?: UpdateStreamingOutShrinkRequestRegionColor;
  /**
   * @remarks
   * This parameter is required.
   * 
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
  texts?: UpdateStreamingOutShrinkRequestTexts[];
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
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestBackgrounds },
      bgColor: UpdateStreamingOutShrinkRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestPanes },
      regionColor: UpdateStreamingOutShrinkRequestRegionColor,
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutShrinkRequestTexts },
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

