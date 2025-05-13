// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListActionRecordsResponseBodyResultStatusInfo } from "./ListActionRecordsResponseBodyResultStatusInfo";


export class ListActionRecordsResponseBodyResult extends $dara.Model {
  actionName?: string;
  actionParams?: { [key: string]: any };
  actionResultAccessList?: string[];
  endTime?: number;
  instanceId?: string;
  metaNow?: string;
  metaOld?: string;
  ownerId?: string;
  process?: string;
  recordDiff?: { [key: string]: any };
  recordIds?: string[];
  requestId?: string;
  startTime?: number;
  stateType?: string;
  statusInfo?: ListActionRecordsResponseBodyResultStatusInfo[];
  userId?: string;
  userInfo?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'actionName',
      actionParams: 'actionParams',
      actionResultAccessList: 'actionResultAccessList',
      endTime: 'endTime',
      instanceId: 'instanceId',
      metaNow: 'metaNow',
      metaOld: 'metaOld',
      ownerId: 'ownerId',
      process: 'process',
      recordDiff: 'recordDiff',
      recordIds: 'recordIds',
      requestId: 'requestId',
      startTime: 'startTime',
      stateType: 'stateType',
      statusInfo: 'statusInfo',
      userId: 'userId',
      userInfo: 'userInfo',
      userType: 'userType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      actionResultAccessList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      instanceId: 'string',
      metaNow: 'string',
      metaOld: 'string',
      ownerId: 'string',
      process: 'string',
      recordDiff: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      recordIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      startTime: 'number',
      stateType: 'string',
      statusInfo: { 'type': 'array', 'itemType': ListActionRecordsResponseBodyResultStatusInfo },
      userId: 'string',
      userInfo: 'string',
      userType: 'string',
    };
  }

  validate() {
    if(this.actionParams) {
      $dara.Model.validateMap(this.actionParams);
    }
    if(Array.isArray(this.actionResultAccessList)) {
      $dara.Model.validateArray(this.actionResultAccessList);
    }
    if(this.recordDiff) {
      $dara.Model.validateMap(this.recordDiff);
    }
    if(Array.isArray(this.recordIds)) {
      $dara.Model.validateArray(this.recordIds);
    }
    if(Array.isArray(this.statusInfo)) {
      $dara.Model.validateArray(this.statusInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

