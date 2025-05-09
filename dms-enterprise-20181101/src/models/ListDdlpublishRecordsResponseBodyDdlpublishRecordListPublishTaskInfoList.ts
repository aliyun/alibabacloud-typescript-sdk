// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList } from "./ListDdlpublishRecordsResponseBodyDdlpublishRecordListPublishTaskInfoListPublishJobList";


export class ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 4325
   */
  dbId?: number;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: the database is not a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The time to publish the ticket.
   * 
   * @example
   * 2020-12-14 20:52:38
   */
  planTime?: string;
  /**
   * @remarks
   * The list of the publishing tasks.
   */
  publishJobList?: ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList[];
  /**
   * @remarks
   * The publishing policy. Valid values:
   * 
   * *   **IMMEDIATELY**: immediately publishes the ticket.
   * *   **REGULARLY**: publishes the ticket at a scheduled time.
   * 
   * @example
   * IMMEDIATELY
   */
  publishStrategy?: string;
  /**
   * @remarks
   * The description of the state.
   * 
   * @example
   * NONE
   */
  statusDesc?: string;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * NONE
   */
  taskJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      planTime: 'PlanTime',
      publishJobList: 'PublishJobList',
      publishStrategy: 'PublishStrategy',
      statusDesc: 'StatusDesc',
      taskJobStatus: 'TaskJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      planTime: 'string',
      publishJobList: { 'type': 'array', 'itemType': ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList },
      publishStrategy: 'string',
      statusDesc: 'string',
      taskJobStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.publishJobList)) {
      $dara.Model.validateArray(this.publishJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

