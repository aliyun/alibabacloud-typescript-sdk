// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateStreamingOutRequestBackgrounds } from "./UpdateStreamingOutRequestBackgrounds";
import { UpdateStreamingOutRequestBgColor } from "./UpdateStreamingOutRequestBgColor";
import { UpdateStreamingOutRequestClockWidgets } from "./UpdateStreamingOutRequestClockWidgets";
import { UpdateStreamingOutRequestImages } from "./UpdateStreamingOutRequestImages";
import { UpdateStreamingOutRequestLayoutSpecifiedUsers } from "./UpdateStreamingOutRequestLayoutSpecifiedUsers";
import { UpdateStreamingOutRequestPanes } from "./UpdateStreamingOutRequestPanes";
import { UpdateStreamingOutRequestRegionColor } from "./UpdateStreamingOutRequestRegionColor";
import { UpdateStreamingOutRequestTexts } from "./UpdateStreamingOutRequestTexts";


export class UpdateStreamingOutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: UpdateStreamingOutRequestBackgrounds[];
  bgColor?: UpdateStreamingOutRequestBgColor;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateStreamingOutRequestClockWidgets[];
  /**
   * @example
   * 2
   */
  cropMode?: number;
  images?: UpdateStreamingOutRequestImages[];
  layoutSpecifiedUsers?: UpdateStreamingOutRequestLayoutSpecifiedUsers;
  panes?: UpdateStreamingOutRequestPanes[];
  regionColor?: UpdateStreamingOutRequestRegionColor;
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
  texts?: UpdateStreamingOutRequestTexts[];
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
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateStreamingOutRequestBackgrounds },
      bgColor: UpdateStreamingOutRequestBgColor,
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateStreamingOutRequestClockWidgets },
      cropMode: 'number',
      images: { 'type': 'array', 'itemType': UpdateStreamingOutRequestImages },
      layoutSpecifiedUsers: UpdateStreamingOutRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': UpdateStreamingOutRequestPanes },
      regionColor: UpdateStreamingOutRequestRegionColor,
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateStreamingOutRequestTexts },
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

