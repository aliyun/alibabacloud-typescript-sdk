// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateCloudRecordShrinkRequestBackgrounds } from "./UpdateCloudRecordShrinkRequestBackgrounds";
import { UpdateCloudRecordShrinkRequestClockWidgets } from "./UpdateCloudRecordShrinkRequestClockWidgets";
import { UpdateCloudRecordShrinkRequestImages } from "./UpdateCloudRecordShrinkRequestImages";
import { UpdateCloudRecordShrinkRequestPanes } from "./UpdateCloudRecordShrinkRequestPanes";
import { UpdateCloudRecordShrinkRequestTexts } from "./UpdateCloudRecordShrinkRequestTexts";


export class UpdateCloudRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: UpdateCloudRecordShrinkRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateCloudRecordShrinkRequestClockWidgets[];
  images?: UpdateCloudRecordShrinkRequestImages[];
  layoutSpecifiedUsersShrink?: string;
  panes?: UpdateCloudRecordShrinkRequestPanes[];
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
  texts?: UpdateCloudRecordShrinkRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      layoutSpecifiedUsersShrink: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestImages },
      layoutSpecifiedUsersShrink: 'string',
      panes: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordShrinkRequestTexts },
    };
  }

  validate() {
    if(Array.isArray(this.backgrounds)) {
      $dara.Model.validateArray(this.backgrounds);
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
    if(Array.isArray(this.texts)) {
      $dara.Model.validateArray(this.texts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

