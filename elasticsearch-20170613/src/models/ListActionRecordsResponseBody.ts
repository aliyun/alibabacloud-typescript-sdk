// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo extends $dara.Model {
  completeNodeCount?: number;
  endTime?: number;
  exception?: string;
  latencyMills?: number;
  nodeCount?: number;
  process?: string;
  startTime?: number;
  stateType?: string;
  subState?: string;
  static names(): { [key: string]: string } {
    return {
      completeNodeCount: 'completeNodeCount',
      endTime: 'endTime',
      exception: 'exception',
      latencyMills: 'latencyMills',
      nodeCount: 'nodeCount',
      process: 'process',
      startTime: 'startTime',
      stateType: 'stateType',
      subState: 'subState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeNodeCount: 'number',
      endTime: 'number',
      exception: 'string',
      latencyMills: 'number',
      nodeCount: 'number',
      process: 'string',
      startTime: 'number',
      stateType: 'string',
      subState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionRecordsResponseBodyResultStatusInfo extends $dara.Model {
  completeNodeCount?: number;
  endTime?: number;
  exception?: string;
  latencyMills?: number;
  nodeCount?: number;
  process?: string;
  startTime?: number;
  stateType?: string;
  subState?: string;
  subStatusInfo?: ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo[];
  static names(): { [key: string]: string } {
    return {
      completeNodeCount: 'completeNodeCount',
      endTime: 'endTime',
      exception: 'exception',
      latencyMills: 'latencyMills',
      nodeCount: 'nodeCount',
      process: 'process',
      startTime: 'startTime',
      stateType: 'stateType',
      subState: 'subState',
      subStatusInfo: 'subStatusInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeNodeCount: 'number',
      endTime: 'number',
      exception: 'string',
      latencyMills: 'number',
      nodeCount: 'number',
      process: 'string',
      startTime: 'number',
      stateType: 'string',
      subState: 'string',
      subStatusInfo: { 'type': 'array', 'itemType': ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo },
    };
  }

  validate() {
    if(Array.isArray(this.subStatusInfo)) {
      $dara.Model.validateArray(this.subStatusInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListActionRecordsResponseBody extends $dara.Model {
  requestId?: string;
  result?: ListActionRecordsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListActionRecordsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

