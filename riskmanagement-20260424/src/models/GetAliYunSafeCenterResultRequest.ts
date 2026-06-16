// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliYunSafeCenterResultRequestCreateSimilarSecurityEventsQueryTaskRequest extends $dara.Model {
  regionId?: string;
  securityEventId?: number;
  similarEventScenarioCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityEventId: 'SecurityEventId',
      similarEventScenarioCode: 'SimilarEventScenarioCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityEventId: 'number',
      similarEventScenarioCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultRequestDescribeInstancesFullStatusRequest extends $dara.Model {
  instanceId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultRequestDescribeSecurityEventOperationStatusRequest extends $dara.Model {
  regionId?: string;
  securityEventIds?: string[];
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityEventIds: 'SecurityEventIds',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityEventIds)) {
      $dara.Model.validateArray(this.securityEventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultRequestDescribeSimilarSecurityEventsRequest extends $dara.Model {
  regionId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultRequestGetAssetDetailByUuidRequest extends $dara.Model {
  regionId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultRequestHandleSecurityEventsRequest extends $dara.Model {
  alertType?: string;
  fileMd5?: string;
  filePath?: string;
  instanceId?: string;
  ip?: string;
  markBatch?: string;
  markMissParam?: string;
  operationCode?: string;
  operationParams?: string;
  regionId?: string;
  remark?: string;
  securityEventIds?: string[];
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      fileMd5: 'FileMd5',
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      ip: 'Ip',
      markBatch: 'MarkBatch',
      markMissParam: 'MarkMissParam',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      regionId: 'RegionId',
      remark: 'Remark',
      securityEventIds: 'SecurityEventIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      fileMd5: 'string',
      filePath: 'string',
      instanceId: 'string',
      ip: 'string',
      markBatch: 'string',
      markMissParam: 'string',
      operationCode: 'string',
      operationParams: 'string',
      regionId: 'string',
      remark: 'string',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityEventIds)) {
      $dara.Model.validateArray(this.securityEventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultRequestHandleSimilarSecurityEventsRequest extends $dara.Model {
  alertType?: string;
  instanceId?: string;
  ip?: string;
  operationCode?: string;
  operationParams?: string;
  regionId?: string;
  sourceIp?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      instanceId: 'InstanceId',
      ip: 'Ip',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      regionId: 'RegionId',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      instanceId: 'string',
      ip: 'string',
      operationCode: 'string',
      operationParams: 'string',
      regionId: 'string',
      sourceIp: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultRequestListInstancesRequest extends $dara.Model {
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultRequest extends $dara.Model {
  createSimilarSecurityEventsQueryTaskRequest?: GetAliYunSafeCenterResultRequestCreateSimilarSecurityEventsQueryTaskRequest;
  describeInstancesFullStatusRequest?: GetAliYunSafeCenterResultRequestDescribeInstancesFullStatusRequest;
  describeSecurityEventOperationStatusRequest?: GetAliYunSafeCenterResultRequestDescribeSecurityEventOperationStatusRequest;
  describeSimilarSecurityEventsRequest?: GetAliYunSafeCenterResultRequestDescribeSimilarSecurityEventsRequest;
  getAssetDetailByUuidRequest?: GetAliYunSafeCenterResultRequestGetAssetDetailByUuidRequest;
  handleSecurityEventsRequest?: GetAliYunSafeCenterResultRequestHandleSecurityEventsRequest;
  handleSimilarSecurityEventsRequest?: GetAliYunSafeCenterResultRequestHandleSimilarSecurityEventsRequest;
  /**
   * @remarks
   * This parameter is required.
   */
  interfaceCode?: string;
  listInstancesRequest?: GetAliYunSafeCenterResultRequestListInstancesRequest;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createSimilarSecurityEventsQueryTaskRequest: 'CreateSimilarSecurityEventsQueryTaskRequest',
      describeInstancesFullStatusRequest: 'DescribeInstancesFullStatusRequest',
      describeSecurityEventOperationStatusRequest: 'DescribeSecurityEventOperationStatusRequest',
      describeSimilarSecurityEventsRequest: 'DescribeSimilarSecurityEventsRequest',
      getAssetDetailByUuidRequest: 'GetAssetDetailByUuidRequest',
      handleSecurityEventsRequest: 'HandleSecurityEventsRequest',
      handleSimilarSecurityEventsRequest: 'HandleSimilarSecurityEventsRequest',
      interfaceCode: 'InterfaceCode',
      listInstancesRequest: 'ListInstancesRequest',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSimilarSecurityEventsQueryTaskRequest: GetAliYunSafeCenterResultRequestCreateSimilarSecurityEventsQueryTaskRequest,
      describeInstancesFullStatusRequest: GetAliYunSafeCenterResultRequestDescribeInstancesFullStatusRequest,
      describeSecurityEventOperationStatusRequest: GetAliYunSafeCenterResultRequestDescribeSecurityEventOperationStatusRequest,
      describeSimilarSecurityEventsRequest: GetAliYunSafeCenterResultRequestDescribeSimilarSecurityEventsRequest,
      getAssetDetailByUuidRequest: GetAliYunSafeCenterResultRequestGetAssetDetailByUuidRequest,
      handleSecurityEventsRequest: GetAliYunSafeCenterResultRequestHandleSecurityEventsRequest,
      handleSimilarSecurityEventsRequest: GetAliYunSafeCenterResultRequestHandleSimilarSecurityEventsRequest,
      interfaceCode: 'string',
      listInstancesRequest: GetAliYunSafeCenterResultRequestListInstancesRequest,
      regionId: 'string',
    };
  }

  validate() {
    if(this.createSimilarSecurityEventsQueryTaskRequest && typeof (this.createSimilarSecurityEventsQueryTaskRequest as any).validate === 'function') {
      (this.createSimilarSecurityEventsQueryTaskRequest as any).validate();
    }
    if(this.describeInstancesFullStatusRequest && typeof (this.describeInstancesFullStatusRequest as any).validate === 'function') {
      (this.describeInstancesFullStatusRequest as any).validate();
    }
    if(this.describeSecurityEventOperationStatusRequest && typeof (this.describeSecurityEventOperationStatusRequest as any).validate === 'function') {
      (this.describeSecurityEventOperationStatusRequest as any).validate();
    }
    if(this.describeSimilarSecurityEventsRequest && typeof (this.describeSimilarSecurityEventsRequest as any).validate === 'function') {
      (this.describeSimilarSecurityEventsRequest as any).validate();
    }
    if(this.getAssetDetailByUuidRequest && typeof (this.getAssetDetailByUuidRequest as any).validate === 'function') {
      (this.getAssetDetailByUuidRequest as any).validate();
    }
    if(this.handleSecurityEventsRequest && typeof (this.handleSecurityEventsRequest as any).validate === 'function') {
      (this.handleSecurityEventsRequest as any).validate();
    }
    if(this.handleSimilarSecurityEventsRequest && typeof (this.handleSimilarSecurityEventsRequest as any).validate === 'function') {
      (this.handleSimilarSecurityEventsRequest as any).validate();
    }
    if(this.listInstancesRequest && typeof (this.listInstancesRequest as any).validate === 'function') {
      (this.listInstancesRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

