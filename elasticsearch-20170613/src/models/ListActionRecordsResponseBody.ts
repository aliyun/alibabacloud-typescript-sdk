// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo extends $dara.Model {
  /**
   * @remarks
   * The number of completed nodes in the sub-phase.
   * 
   * @example
   * 3
   */
  completeNodeCount?: number;
  /**
   * @remarks
   * The end time of the sub-phase. The value is a UNIX timestamp in milliseconds.
   */
  endTime?: number;
  /**
   * @remarks
   * The exception information for the sub-phase.
   */
  exception?: string;
  /**
   * @remarks
   * The time elapsed for the sub-phase, in milliseconds.
   * 
   * @example
   * 1000
   */
  latencyMills?: number;
  /**
   * @remarks
   * The total number of nodes involved in the sub-phase.
   * 
   * @example
   * 5
   */
  nodeCount?: number;
  /**
   * @remarks
   * The completion progress of the sub-phase, represented as a percentage string.
   * 
   * @example
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The start time of the sub-phase. The value is a UNIX timestamp in milliseconds.
   */
  startTime?: number;
  /**
   * @remarks
   * The current state of the sub-phase.
   * 
   * @example
   * FINISHED
   */
  stateType?: string;
  /**
   * @remarks
   * The name of the sub-phase.
   * 
   * @example
   * clusterStateWait
   */
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
  /**
   * @remarks
   * The number of completed nodes in the phase.
   * 
   * @example
   * 3
   */
  completeNodeCount?: number;
  /**
   * @remarks
   * The end time of the phase. The value is a UNIX timestamp in milliseconds.
   */
  endTime?: number;
  /**
   * @remarks
   * The exception information for the phase.
   */
  exception?: string;
  /**
   * @remarks
   * The time elapsed for the phase, in milliseconds.
   * 
   * @example
   * 1000
   */
  latencyMills?: number;
  /**
   * @remarks
   * The total number of nodes involved in the phase.
   * 
   * @example
   * 5
   */
  nodeCount?: number;
  /**
   * @remarks
   * The completion progress of the phase, represented as a percentage string.
   * 
   * @example
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The start time of the phase. The value is a UNIX timestamp in milliseconds.
   */
  startTime?: number;
  /**
   * @remarks
   * The current state of the phase.
   * 
   * @example
   * FINISHED
   */
  stateType?: string;
  /**
   * @remarks
   * The name of the phase.
   * 
   * @example
   * rolling
   */
  subState?: string;
  /**
   * @remarks
   * The list of status details for the sub-phases included in the current phase.
   */
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
  /**
   * @remarks
   * The name of the operation that triggered the change.
   * 
   * @example
   * RestartInstance
   */
  actionName?: string;
  /**
   * @remarks
   * The parameters used for the change.
   */
  actionParams?: { [key: string]: any };
  actionResultAccessList?: string[];
  /**
   * @remarks
   * The end time of the change. The value is a UNIX timestamp in milliseconds.
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Elasticsearch instance that was changed.
   * 
   * @example
   * es-cn-nif24adwc0082****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance information after the change, represented as a JSON string.
   */
  metaNow?: string;
  /**
   * @remarks
   * The instance information before the change, represented as a JSON string.
   */
  metaOld?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the account that triggered the change belongs.
   */
  ownerId?: string;
  /**
   * @remarks
   * The progress of the change, represented as a percentage string.
   * 
   * @example
   * 100%
   */
  process?: string;
  /**
   * @remarks
   * The field differences before and after the change.
   */
  recordDiff?: { [key: string]: any };
  recordIds?: string[];
  /**
   * @remarks
   * The ID of the request that triggered the change.
   * 
   * @example
   * request-123
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the change. The value is a UNIX timestamp in milliseconds.
   */
  startTime?: number;
  /**
   * @remarks
   * The current state of the change.
   * 
   * @example
   * FINISHED
   */
  stateType?: string;
  /**
   * @remarks
   * The list of status details for each phase of the change.
   */
  statusInfo?: ListActionRecordsResponseBodyResultStatusInfo[];
  /**
   * @remarks
   * The ID of the user that triggered the change.
   * 
   * @example
   * user-123
   */
  userId?: string;
  userInfo?: string;
  /**
   * @remarks
   * The type of the account that triggered the change.
   * 
   * @example
   * customer
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6F******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of instance change records.
   */
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

