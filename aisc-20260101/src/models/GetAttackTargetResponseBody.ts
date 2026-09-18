// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackTargetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The advanced connection configuration (JSON character string). For common fields and provider configuration templates, refer to the ConnectionConfig parameter of CreateAttackTarget.
   * 
   * @example
   * {\\"httpMethod\\":\\"POST\\",\\"authType\\":\\"bearer\\",\\"timeoutMs\\":30000,\\"requestTemplate\\":\\"{\\\\\\"input\\\\\\":{\\\\\\"prompt\\\\\\":\\\\\\"{{prompt}}\\\\\\"},\\\\\\"parameters\\\\\\":{\\\\\\"incremental_output\\\\\\":true},\\\\\\"debug\\\\\\":{}}\\",\\"messageJsonPath\\":\\"$.output.text\\",\\"requestHeaders\\":\\"{\\\\\\"X-DashScope-SSE\\\\\\": \\\\\\"enable\\\\\\" }\\",\\"stream\\":true,\\"customAuthHeaderName\\":\\"\\"}
   */
  connectionConfig?: string;
  /**
   * @remarks
   * The connection protocol type of the target service.
   * 
   * @example
   * openai
   */
  connectionMethod?: string;
  /**
   * @remarks
   * The time when the target was created. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735689600000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the scan target. This value may be empty.
   * 
   * @example
   * Production Bailian application
   */
  description?: string;
  /**
   * @remarks
   * The HTTP or HTTPS endpoint of the target model service. When ConnectionMethod is set to enterprise_relay, this value is a fixed internal endpoint.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The time of the first scan. This value is a UNIX timestamp in milliseconds. This is an aggregate field that is not populated by this operation and returns an empty value. Refer to ListAttackTargets.
   * 
   * @example
   * 1735689600000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The failure reason of the most recent scan task. This is an aggregate field that is not populated by this operation and returns an empty value. Refer to ListAttackTargets.
   * 
   * @example
   * Execution timed out
   */
  lastScanFailMessage?: string;
  /**
   * @remarks
   * The status of the most recent scan task. This is an aggregate field that is not populated by this operation and returns an empty value. Refer to ListAttackTargets.
   * 
   * @example
   * completed
   */
  lastScanStatus?: string;
  /**
   * @remarks
   * The time of the most recent scan. This value is a UNIX timestamp in milliseconds. This is an aggregate field that is not populated by this operation and returns an empty value. Refer to ListAttackTargets.
   * 
   * @example
   * 1735689600000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The name of the target model. When ConnectionMethod is set to enterprise_relay, this value is the fixed platform value Agent.
   * 
   * @example
   * qwen-flash
   */
  modelName?: string;
  /**
   * @remarks
   * The time when the target was last modified. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735689600000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The business label of the model or agent provider.
   * 
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @remarks
   * The risk level of the task result. This is an aggregate field that is not populated by this operation and returns an empty value. Refer to ListAttackTargets.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The cumulative number of scans. This is an aggregate field that is not populated by this operation and returns an empty value. For the meaning and example values, refer to the ListAttackTargets response.
   * 
   * @example
   * 12
   */
  scanCount?: number;
  /**
   * @remarks
   * The scan node configuration (JSON character string). Common fields include scanType (scan pattern: attack for security attack scan, tc260 for TC260 filing scan), scannerType (execute DPI engine: classic for per-sample execute, agent for multi-round autonomous attack), and sampleScope (sample scope: version for the current effective version, all for full samples). If the target is not configured, the default configurations are returned.
   * 
   * @example
   * {"scanType":"attack","scannerType":"classic","sampleScope":"all"}
   */
  scanTaskConfig?: string;
  /**
   * @remarks
   * The unique identifier of the scan target.
   * 
   * @example
   * target-abc123def4567
   */
  targetId?: string;
  /**
   * @remarks
   * The display name of the scan target.
   * 
   * @example
   * My Bailian target
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the scan target.
   * 
   * @example
   * model
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfig: 'ConnectionConfig',
      connectionMethod: 'ConnectionMethod',
      createTime: 'CreateTime',
      description: 'Description',
      endpoint: 'Endpoint',
      firstScanTime: 'FirstScanTime',
      lastScanFailMessage: 'LastScanFailMessage',
      lastScanStatus: 'LastScanStatus',
      lastScanTime: 'LastScanTime',
      modelName: 'ModelName',
      modifyTime: 'ModifyTime',
      provider: 'Provider',
      riskLevel: 'RiskLevel',
      scanCount: 'ScanCount',
      scanTaskConfig: 'ScanTaskConfig',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfig: 'string',
      connectionMethod: 'string',
      createTime: 'number',
      description: 'string',
      endpoint: 'string',
      firstScanTime: 'number',
      lastScanFailMessage: 'string',
      lastScanStatus: 'string',
      lastScanTime: 'number',
      modelName: 'string',
      modifyTime: 'number',
      provider: 'string',
      riskLevel: 'string',
      scanCount: 'number',
      scanTaskConfig: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttackTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The scan target details.
   */
  data?: GetAttackTargetResponseBodyData;
  /**
   * @remarks
   * The request ID. You can use this ID for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-B7AB7B5A9C8E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAttackTargetResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

