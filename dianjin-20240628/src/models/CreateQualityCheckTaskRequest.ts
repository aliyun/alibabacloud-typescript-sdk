// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateQualityCheckTaskRequestConversationList } from "./CreateQualityCheckTaskRequestConversationList";


export class CreateQualityCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  conversationList?: CreateQualityCheckTaskRequestConversationList;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-09-27 11:23:20
   */
  gmtService?: string;
  metaData?: { [key: string]: string };
  qualityGroup?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      gmtService: 'gmtService',
      metaData: 'metaData',
      qualityGroup: 'qualityGroup',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: CreateQualityCheckTaskRequestConversationList,
      gmtService: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      qualityGroup: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.conversationList && typeof (this.conversationList as any).validate === 'function') {
      (this.conversationList as any).validate();
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    if(Array.isArray(this.qualityGroup)) {
      $dara.Model.validateArray(this.qualityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

