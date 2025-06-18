// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceOperation extends $dara.Model {
  creatorId?: string;
  gmtCreatedTime?: string;
  gmtEndTime?: string;
  gmtModifiedTime?: string;
  gmtStartTime?: string;
  objectId?: string;
  objectType?: string;
  operationDescription?: string;
  operationId?: string;
  operationSpecJson?: string;
  operationType?: string;
  reasonCode?: string;
  reasonMessage?: string;
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

