// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateCloudRecordRequestBackgrounds } from "./UpdateCloudRecordRequestBackgrounds";
import { UpdateCloudRecordRequestClockWidgets } from "./UpdateCloudRecordRequestClockWidgets";
import { UpdateCloudRecordRequestImages } from "./UpdateCloudRecordRequestImages";
import { UpdateCloudRecordRequestLayoutSpecifiedUsers } from "./UpdateCloudRecordRequestLayoutSpecifiedUsers";
import { UpdateCloudRecordRequestPanes } from "./UpdateCloudRecordRequestPanes";
import { UpdateCloudRecordRequestTexts } from "./UpdateCloudRecordRequestTexts";


export class UpdateCloudRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  backgrounds?: UpdateCloudRecordRequestBackgrounds[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  clockWidgets?: UpdateCloudRecordRequestClockWidgets[];
  images?: UpdateCloudRecordRequestImages[];
  layoutSpecifiedUsers?: UpdateCloudRecordRequestLayoutSpecifiedUsers;
  panes?: UpdateCloudRecordRequestPanes[];
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
  texts?: UpdateCloudRecordRequestTexts[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      backgrounds: 'Backgrounds',
      channelId: 'ChannelId',
      clockWidgets: 'ClockWidgets',
      images: 'Images',
      layoutSpecifiedUsers: 'LayoutSpecifiedUsers',
      panes: 'Panes',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      texts: 'Texts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      backgrounds: { 'type': 'array', 'itemType': UpdateCloudRecordRequestBackgrounds },
      channelId: 'string',
      clockWidgets: { 'type': 'array', 'itemType': UpdateCloudRecordRequestClockWidgets },
      images: { 'type': 'array', 'itemType': UpdateCloudRecordRequestImages },
      layoutSpecifiedUsers: UpdateCloudRecordRequestLayoutSpecifiedUsers,
      panes: { 'type': 'array', 'itemType': UpdateCloudRecordRequestPanes },
      taskId: 'string',
      templateId: 'string',
      texts: { 'type': 'array', 'itemType': UpdateCloudRecordRequestTexts },
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
    if(this.layoutSpecifiedUsers && typeof (this.layoutSpecifiedUsers as any).validate === 'function') {
      (this.layoutSpecifiedUsers as any).validate();
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

