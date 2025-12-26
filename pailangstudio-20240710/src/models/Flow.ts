// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowRuntime extends $dara.Model {
  /**
   * @remarks
   * 运行时ID
   */
  runtimeId?: string;
  /**
   * @remarks
   * 运行时名称
   */
  runtimeName?: string;
  /**
   * @remarks
   * 运行时状态
   */
  runtimeStatus?: string;
  /**
   * @remarks
   * 运行时类型
   */
  runtimeType?: string;
  /**
   * @remarks
   * 是否支持SSE
   */
  supportSSEStream?: boolean;
  static names(): { [key: string]: string } {
    return {
      runtimeId: 'RuntimeId',
      runtimeName: 'RuntimeName',
      runtimeStatus: 'RuntimeStatus',
      runtimeType: 'RuntimeType',
      supportSSEStream: 'SupportSSEStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runtimeId: 'string',
      runtimeName: 'string',
      runtimeStatus: 'string',
      runtimeType: 'string',
      supportSSEStream: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Flow extends $dara.Model {
  accessibility?: string;
  codeModeRunInfo?: string;
  createFrom?: string;
  creator?: string;
  description?: string;
  flowId?: string;
  flowName?: string;
  flowStoragePath?: string;
  flowTemplateId?: string;
  flowType?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  runtime?: FlowRuntime;
  runtimeId?: string;
  sourceUri?: string;
  version?: string;
  workDir?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeModeRunInfo: 'CodeModeRunInfo',
      createFrom: 'CreateFrom',
      creator: 'Creator',
      description: 'Description',
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowStoragePath: 'FlowStoragePath',
      flowTemplateId: 'FlowTemplateId',
      flowType: 'FlowType',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      runtime: 'Runtime',
      runtimeId: 'RuntimeId',
      sourceUri: 'SourceUri',
      version: 'Version',
      workDir: 'WorkDir',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeModeRunInfo: 'string',
      createFrom: 'string',
      creator: 'string',
      description: 'string',
      flowId: 'string',
      flowName: 'string',
      flowStoragePath: 'string',
      flowTemplateId: 'string',
      flowType: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      runtime: FlowRuntime,
      runtimeId: 'string',
      sourceUri: 'string',
      version: 'string',
      workDir: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

