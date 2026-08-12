// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliYunSafeCenterResultRequestCreateSimilarSecurityEventsQueryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security alert event.
   * 
   * @example
   * 629755508
   */
  securityEventId?: number;
  /**
   * @remarks
   * The code of the alerting event that has the same type or rule hits.
   * 
   * @example
   * default
   */
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
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceId?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The region ID. Example: ap-southeast-1.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of security alert event IDs.
   * 
   * > You must specify either TaskId or SecurityEventIds.N. At least one of these parameters is required for a successful call.
   */
  securityEventIds?: string[];
  /**
   * @remarks
   * The ID of the task for handling security alert events.
   * 
   * > You must specify either TaskId or SecurityEventIds. At least one of these parameters is required for a successful call.
   * 
   * @example
   * 0BC3B4E600002A9F000048BCDCE7E710
   */
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
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the query task. You can call the CreateSimilarSecurityEventsQueryTask operation to obtain this parameter.
   * 
   * @example
   * 1689135
   */
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
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The UUID of the asset to query.
   * 
   * @example
   * 9A75F21D3993C0A2B094A4AB132890B2
   */
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
  /**
   * @remarks
   * The alert rule type.
   * 
   * @example
   * default
   */
  alertType?: string;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * fbbb90731fbb6df57c933173182d01a5
   */
  fileMd5?: string;
  /**
   * @remarks
   * The path of the sensitive file.
   * 
   * @example
   * flyfish-lfp-wy.release
   */
  filePath?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * api-shared-vpc-002
   */
  instanceId?: string;
  /**
   * @remarks
   * The user IP address.
   * 
   * @example
   * 123.56.127.180
   */
  ip?: string;
  /**
   * @remarks
   * Specifies whether to add to the whitelist in batches.
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  markBatch?: string;
  /**
   * @remarks
   * The whitelist rule configuration. The value is in JSON format and contains the following fields:
   * 
   * - **field**: The whitelist field.
   * - **operate**: The whitelist method. Valid values:
   *   - **notContains**: Does not contain.
   *   - **contains**: Contains.
   *   - **regex**: Regular expression match.
   *   - **strEqual**: Equals.
   *   - **strNotEqual**: Does not equal.
   * - **fieldValue**: The match value.
   * - **uuid**: The scope of the whitelist rule. Valid values:
   *   - **part**: Only the current asset.
   *   - **ALL**: All assets.
   * 
   * > Call the DescribeSecurityEventOperations operation to obtain the field whitelist field.
   * 
   * @example
   * [{"uuid":"part","field":"gmtModified","operate":"contains","fieldValue":"asd"},{"uuid":"part","field":"loginUser","operate":"contains","fieldValue":"vff"}]
   */
  markMissParam?: string;
  /**
   * @remarks
   * The method for handling the security alert event. Valid values:
   * 
   * - **block_ip**: Block.
   * - **advance_mark_mis_info**: Add to whitelist.
   * - **ignore**: Ignore.
   * - **manual_handled**: Manually handled.
   * - **kill_process**: Terminate process.
   * - **cleanup**: Deep scan and cleanup.
   * - **kill_and_quara**: Virus scan and quarantine.
   * - **disable_malicious_defense**: Disable malicious behavior defense.
   * - **client_problem_check**: Troubleshoot.
   * - **quara**: Quarantine.
   * 
   * @example
   * block_ip
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration of the sub-operation for handling security alert events.
   * 
   * When OperationCode is set to kill_and_quara, specify the parameter type "subOperation":${code}.
   * Valid code values:
   * - Quarantined file: quaraFileByMd5andPath
   * - Kill process and quarantined file by process ID and path: killAndQuaraFileByPidAndMd5andPath
   * - Kill process only: killByMd5andPath
   * - Kill process and quarantined file: killAndQuaraFileByMd5andPath
   * - Kill container process by process ID and path: killProcessByPidandPathandCmdline
   * - Kill container process by file MD5 and path: killContainerProcessByMd5AndPath
   * 
   * When OperationCode is set to block_ip, the parameter is:
   * - Expiration time: expireTime:${timestamp}
   * > This parameter is required only when OperationCode is set to `kill_and_quara` or `block_ip`. For other values of OperationCode, this parameter can be left empty. ${timestamp} indicates the timestamp of the deadline for blocking this IP address.
   * 
   * @example
   * {\\"expireTime\\":1719588943551,\\"subOperation\\":\\"killAndQuaraFileByMd5andPath\\"}
   */
  operationParams?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 11
   */
  remark?: string;
  /**
   * @remarks
   * The collection of IDs of the security alert events to handle.
   * 
   * Example:
   */
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
  /**
   * @remarks
   * The alerting type.
   * 
   * @example
   * default
   */
  alertType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cfw_elasticity_public_cn-g4t3nkh3i00b
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.10*.44.71
   */
  ip?: string;
  /**
   * @remarks
   * The operation type for batch handling similar security alert events.
   * 
   * > You can call the DescribeSecurityEventOperations operation to obtain this parameter.
   * 
   * @example
   * offline_handled
   */
  operationCode?: string;
  /**
   * @remarks
   * The configuration of the sub-operation for handling alerting events. The value is in JSON format.
   * 
   * > This parameter is required only when **OperationCode** is set to **kill_and_quara**, **block_ip**, or **virus_quara**. For other values of **OperationCode**, this parameter can be left empty.
   * 
   * > When **OperationCode** is set to **block_ip**, the following field is included:
   * > - **expireTime**: The lock expiration time. Unit: milliseconds.
   * >
   * > When **OperationCode** is set to **kill_and_quara**, the following field is included:
   * > - **subOperation**: The method for killing and quarantining. Valid values:
   * >     - **killAndQuaraFileByMd5andPath**: Terminates the process and quarantines the file.
   * >     - **killByMd5andPath**: Terminates the running process.
   * >
   * > When **OperationCode** is set to **virus_quara**, the following field is included:
   * > - **subOperation**: The method for killing and quarantining. Valid values:
   * >    - **quaraFileByMd5andPath**: Quarantines the source file of the process.
   * 
   * @example
   * {\\"expireTime\\":1767687685917}
   */
  operationParams?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 220.2*3.155.93
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the task for batch handling all security alert events of the same type.
   * 
   * > You can call the CreateSimilarSecurityEventsQueryTask operation to obtain this parameter.
   * 
   * @example
   * 12221
   */
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
  /**
   * @remarks
   * The instance IDs of simple application servers. The value is a JSON array that can contain up to 100 IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
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
  /**
   * @remarks
   * Creates a node to query security alerting events triggered by the same rule or alerting type.
   */
  createSimilarSecurityEventsQueryTaskRequest?: GetAliYunSafeCenterResultRequestCreateSimilarSecurityEventsQueryTaskRequest;
  /**
   * @remarks
   * Queries the running status of ECS instances.
   */
  describeInstancesFullStatusRequest?: GetAliYunSafeCenterResultRequestDescribeInstancesFullStatusRequest;
  /**
   * @remarks
   * Queries whether the list of security alerting events that match the same IP rule or same alerting type as the alerting event to be handled is empty.
   */
  describeSecurityEventOperationStatusRequest?: GetAliYunSafeCenterResultRequestDescribeSecurityEventOperationStatusRequest;
  /**
   * @remarks
   * Queries identical security alert events in Security Center.
   */
  describeSimilarSecurityEventsRequest?: GetAliYunSafeCenterResultRequestDescribeSimilarSecurityEventsRequest;
  /**
   * @remarks
   * The request parameters for querying the Security Center Agent status.
   */
  getAssetDetailByUuidRequest?: GetAliYunSafeCenterResultRequestGetAssetDetailByUuidRequest;
  /**
   * @remarks
   * Handles security alert events.
   */
  handleSecurityEventsRequest?: GetAliYunSafeCenterResultRequestHandleSecurityEventsRequest;
  /**
   * @remarks
   * Handles security alert events in batches based on the same IP rule or type.
   */
  handleSimilarSecurityEventsRequest?: GetAliYunSafeCenterResultRequestHandleSimilarSecurityEventsRequest;
  /**
   * @remarks
   * The code of the public API operation.
   * 
   * - **GetAssetDetailByUuid**: Retrieves the Agent status. Request parameter: GetAssetDetailByUuidRequest.
   * 
   * - **DescribeSimilarSecurityEvents**: Retrieves the list of instance IDs for identical security alerting events. Request parameter: DescribeSimilarSecurityEventsRequest.
   * 
   * - **CreateSimilarSecurityEventsQueryTask**: Creates a node to query security alerting events triggered by the same rule or alerting type. Request parameter: CreateSimilarSecurityEventsQueryTaskRequest.
   * 
   * - **DescribeSecurityEventOperationStatus**: Queries whether the list of security alerting events that match the same IP rule or same alerting type as the alerting event to be handled is empty. Request parameter: DescribeSecurityEventOperationStatusRequest.
   * 
   * - **HandleSimilarSecurityEvents**: Handles security alerting events in batches based on the same IP rule or type. Request parameter: HandleSimilarSecurityEventsRequest.
   * HandleSecurityEvents: Handles security alerting events. Request parameter: HandleSecurityEventsRequest.
   * 
   * - **DescribeInstancesFullStatus**: Queries the running status of ECS instances. Request parameter: DescribeInstancesFullStatusRequest.
   * 
   * - **ListInstances**: Queries the running status of simple application servers. Request parameter: ListInstancesRequest.
   * 
   * - **StartConfigRuleEvaluation**: Re-evaluates security check rules.
   * 
   * > Each API operation name corresponds to its own request parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * ListInstanceStatus
   */
  interfaceCode?: string;
  /**
   * @remarks
   * Queries the running status of simple application servers.
   */
  listInstancesRequest?: GetAliYunSafeCenterResultRequestListInstancesRequest;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-guangzhou
   */
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

