// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDisasterRecoveryItemsResponseBodyDataListTopics } from "./ListDisasterRecoveryItemsResponseBodyDataListTopics";


export class ListDisasterRecoveryItemsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-09-20 03:38:28
   */
  createTime?: string;
  /**
   * @remarks
   * Extended information
   */
  extInfo?: { [key: string]: string };
  /**
   * @remarks
   * Backup plan ID
   * 
   * @example
   * 100070284
   */
  itemId?: number;
  /**
   * @remarks
   * Backup mapping status:
   *   - CREATING (Creating)
   *   - CHANGING (Changing)
   *   - RUNNING (Running)
   *   - MANUAL_STOPPED (Manually Stopped)
   *   - OVERDUE_STOPPED (Stopped Due to Overdue)
   * 
   * @example
   * RUNNING
   */
  itemStatus?: string;
  /**
   * @remarks
   * Mapping ID
   * 
   * @example
   * 1300000016
   */
  planId?: number;
  /**
   * @remarks
   * Topics included in the backup mapping
   */
  topics?: ListDisasterRecoveryItemsResponseBodyDataListTopics[];
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-10-04 02:19:44
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
      topics: { 'type': 'array', 'itemType': ListDisasterRecoveryItemsResponseBodyDataListTopics },
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

