// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQualityCheckTaskResultResponseBodyDataConversationList } from "./GetQualityCheckTaskResultResponseBodyDataConversationList";
import { GetQualityCheckTaskResultResponseBodyDataQualityCheckList } from "./GetQualityCheckTaskResultResponseBodyDataQualityCheckList";


export class GetQualityCheckTaskResultResponseBodyData extends $dara.Model {
  conversationList?: GetQualityCheckTaskResultResponseBodyDataConversationList;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtEnd?: string;
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtStart?: string;
  qualityCheckList?: GetQualityCheckTaskResultResponseBodyDataQualityCheckList[];
  /**
   * @example
   * INIT
   */
  status?: string;
  /**
   * @example
   * 1703557101831
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationList: 'conversationList',
      gmtCreate: 'gmtCreate',
      gmtEnd: 'gmtEnd',
      gmtStart: 'gmtStart',
      qualityCheckList: 'qualityCheckList',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationList: GetQualityCheckTaskResultResponseBodyDataConversationList,
      gmtCreate: 'string',
      gmtEnd: 'string',
      gmtStart: 'string',
      qualityCheckList: { 'type': 'array', 'itemType': GetQualityCheckTaskResultResponseBodyDataQualityCheckList },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.conversationList && typeof (this.conversationList as any).validate === 'function') {
      (this.conversationList as any).validate();
    }
    if(Array.isArray(this.qualityCheckList)) {
      $dara.Model.validateArray(this.qualityCheckList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

