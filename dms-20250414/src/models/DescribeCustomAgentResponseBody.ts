// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomAgentResponseBodyDataExecutionConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  skipPlan?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipPlan: 'SkipPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipPlan: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomAgentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 16738266********
   */
  aliyunParentUid?: string;
  /**
   * @example
   * 20372822********
   */
  aliyunUid?: string;
  /**
   * @example
   * HaoY*****
   */
  creatorUserName?: string;
  /**
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  dataJson?: string;
  description?: string;
  /**
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  executionConfig?: DescribeCustomAgentResponseBodyDataExecutionConfig;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtModified?: string;
  instruction?: string;
  knowledge?: string;
  /**
   * @example
   * 20372822********
   */
  modifier?: string;
  /**
   * @example
   * HaoY*****
   */
  modifierUserName?: string;
  name?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  offlineTime?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  releaseTime?: string;
  /**
   * @example
   * RELEASED
   */
  status?: string;
  textReportConfig?: string;
  webReportConfig?: string;
  /**
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunParentUid: 'AliyunParentUid',
      aliyunUid: 'AliyunUid',
      creatorUserName: 'CreatorUserName',
      customAgentId: 'CustomAgentId',
      dataJson: 'DataJson',
      description: 'Description',
      dmsUnit: 'DmsUnit',
      executionConfig: 'ExecutionConfig',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      modifier: 'Modifier',
      modifierUserName: 'ModifierUserName',
      name: 'Name',
      offlineTime: 'OfflineTime',
      region: 'Region',
      releaseTime: 'ReleaseTime',
      status: 'Status',
      textReportConfig: 'TextReportConfig',
      webReportConfig: 'WebReportConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunParentUid: 'string',
      aliyunUid: 'string',
      creatorUserName: 'string',
      customAgentId: 'string',
      dataJson: 'string',
      description: 'string',
      dmsUnit: 'string',
      executionConfig: DescribeCustomAgentResponseBodyDataExecutionConfig,
      gmtCreated: 'string',
      gmtModified: 'string',
      instruction: 'string',
      knowledge: 'string',
      modifier: 'string',
      modifierUserName: 'string',
      name: 'string',
      offlineTime: 'string',
      region: 'string',
      releaseTime: 'string',
      status: 'string',
      textReportConfig: 'string',
      webReportConfig: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.executionConfig && typeof (this.executionConfig as any).validate === 'function') {
      (this.executionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomAgentResponseBody extends $dara.Model {
  data?: DescribeCustomAgentResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCustomAgentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

