// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackTargetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The advanced connection configuration for the target (JSON character string). For common fields and provider configuration templates, see the ConnectionConfig parameter description of the CreateAttackTarget operation.
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
   * The time when the target was created. The value is a millisecond-level UNIX timestamp.
   * 
   * @example
   * 1735689600000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the scan target.
   * 
   * @example
   * Production Bailian application
   */
  description?: string;
  /**
   * @remarks
   * The HTTP or HTTPS endpoint address of the target model service.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The time when the first scan was performed. The value is a millisecond-level UNIX timestamp. This parameter is null if no scan has been performed.
   * 
   * @example
   * 1735689600000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The failure reason of the most recent scan task. This parameter is empty if the most recent scan did not fail.
   * 
   * @example
   * Scan executor connection timed out
   */
  lastScanFailMessage?: string;
  /**
   * @remarks
   * The detection status of the most recent scan task.
   * 
   * @example
   * completed
   */
  lastScanStatus?: string;
  /**
   * @remarks
   * The time when the last scan was performed. The value is a millisecond-level UNIX timestamp. This parameter is null if no scan has been performed.
   * 
   * @example
   * 1735689600000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The detailed message of the most recent connectivity verification. If the verification succeeded, the value is a response content snippet returned by the target service. If the verification failed, the value is the error reason.
   * 
   * @example
   * Connectivity verification succeeded
   */
  lastVerifyMessage?: string;
  /**
   * @remarks
   * The name of the target model.
   * 
   * @example
   * qwen-flash
   */
  modelName?: string;
  /**
   * @remarks
   * The time when the target was last modified. The value is a millisecond-level UNIX timestamp.
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
   * The risk level derived from the most recent completed scan task. This parameter is null if no scan has been performed.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The total number of scans performed. The value is 0 if no scan has been performed.
   * 
   * @example
   * 12
   */
  scanCount?: number;
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
  /**
   * @remarks
   * The connectivity verification status of the target.
   * 
   * @example
   * verified
   */
  verifyStatus?: string;
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
      lastVerifyMessage: 'LastVerifyMessage',
      modelName: 'ModelName',
      modifyTime: 'ModifyTime',
      provider: 'Provider',
      riskLevel: 'RiskLevel',
      scanCount: 'ScanCount',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
      verifyStatus: 'VerifyStatus',
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
      lastVerifyMessage: 'string',
      modelName: 'string',
      modifyTime: 'number',
      provider: 'string',
      riskLevel: 'string',
      scanCount: 'number',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
      verifyStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAttackTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of scan targets on the current page.
   */
  data?: ListAttackTargetsResponseBodyData[];
  /**
   * @remarks
   * The normalized page number that takes effect. The value may differ from the input parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The normalized number of entries per page that takes effect. The value may differ from the input parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use this ID for troubleshooting and log tracing.
   * 
   * @example
   * 1EBD0C05-6C1F-4C95-9C63-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of scan targets that match the filter conditions. In post-filtering scenarios, this value is the total count after in-memory filtering.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAttackTargetsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

