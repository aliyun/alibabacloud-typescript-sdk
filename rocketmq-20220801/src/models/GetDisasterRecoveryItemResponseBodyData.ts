// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDisasterRecoveryItemResponseBodyDataTopics } from "./GetDisasterRecoveryItemResponseBodyDataTopics";


export class GetDisasterRecoveryItemResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the topic mapping task was created.
   * 
   * @example
   * 2024-06-24 02:57:31
   */
  createTime?: string;
  /**
   * @remarks
   * Additional Information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the topic mapping
   * 
   * @example
   * 100070284
   */
  itemId?: number;
  /**
   * @remarks
   * The topic mapping task status.
   * 
   * @example
   * RUNNING
   */
  itemStatus?: string;
  /**
   * @remarks
   * The ID of the global message backup plan.
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * Topics included in the backup mapping
   */
  topics?: GetDisasterRecoveryItemResponseBodyDataTopics[];
  /**
   * @remarks
   * The time when the topic mapping task was last updated.
   * 
   * @example
   * 2024-09-26 02:13:10
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      extInfo: 'extInfo',
      itemId: 'itemId',
      itemStatus: 'itemStatus',
      planId: 'planId',
      topics: 'topics',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'number',
      itemStatus: 'string',
      planId: 'number',
      topics: { 'type': 'array', 'itemType': GetDisasterRecoveryItemResponseBodyDataTopics },
      updateTime: 'string',
    };
  }

  validate() {
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

