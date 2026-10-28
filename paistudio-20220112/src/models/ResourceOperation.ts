// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceOperation extends $dara.Model {
  /**
   * @remarks
   * The ID of the creator of the resource change.
   * 
   * @example
   * 1884692****
   */
  creatorId?: string;
  /**
   * @remarks
   * The time when the resource change was created.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the resource change ended.
   * 
   * @example
   * 2023-06-22T00:02:00Z
   */
  gmtEndTime?: string;
  /**
   * @remarks
   * The time when the resource change was updated.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The time when the resource change started.
   * 
   * @example
   * 2023-06-22T00:01:00Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The object ID of the resource change.
   * 
   * @example
   * quotaxxx
   */
  objectId?: string;
  /**
   * @remarks
   * The object type of the resource change.
   * 
   * @example
   * Quota
   */
  objectType?: string;
  /**
   * @remarks
   * The description of the resource change.
   * 
   * @example
   * A user requests to change the Desired Capacity from 4 to 5.
   */
  operationDescription?: string;
  /**
   * @remarks
   * The resource change ID.
   * 
   * @example
   * operation-123
   */
  operationId?: string;
  /**
   * @remarks
   * The details of the resource change.
   * 
   * @example
   * {"ScaleQuota":{"Min":{"NodeSpecs":[{"Type":"ecs.gn6i-c8g1.2xlarge","Count":20,"IncludeNodes":["A","B","C"],"ExcludeNodes":["D"]}]}}}
   */
  operationSpecJson?: string;
  /**
   * @remarks
   * The type of the resource change.
   * 
   * @example
   * ScaleQuota
   */
  operationType?: string;
  /**
   * @remarks
   * The error code.
   */
  reasonCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ""
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The status of the resource change.
   * 
   * @example
   * Executing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtEndTime: 'GmtEndTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartTime: 'GmtStartTime',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      operationSpecJson: 'OperationSpecJson',
      operationType: 'OperationType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      gmtCreatedTime: 'string',
      gmtEndTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartTime: 'string',
      objectId: 'string',
      objectType: 'string',
      operationDescription: 'string',
      operationId: 'string',
      operationSpecJson: 'string',
      operationType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

