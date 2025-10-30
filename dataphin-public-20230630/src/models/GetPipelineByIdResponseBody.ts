// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineByIdResponseBodyDataNodeInfo extends $dara.Model {
  /**
   * @example
   * comment
   */
  desc?: string;
  /**
   * @example
   * /
   */
  directory?: string;
  /**
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @example
   * 123
   */
  pipelineId?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      directory: 'Directory',
      fileId: 'FileId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      directory: 'string',
      fileId: 'number',
      nodeId: 'string',
      nodeName: 'string',
      pipelineId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineByIdResponseBodyDataPipelineConfigHops extends $dara.Model {
  sendTo?: boolean;
  /**
   * @example
   * mysql_reader
   */
  source?: string;
  /**
   * @example
   * odps_writer
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      sendTo: 'SendTo',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sendTo: 'boolean',
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineByIdResponseBodyDataPipelineConfigSteps extends $dara.Model {
  isDistribute?: boolean;
  /**
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @example
   * mysql_reader
   */
  stepName?: string;
  /**
   * @example
   * input
   */
  stepType?: string;
  static names(): { [key: string]: string } {
    return {
      isDistribute: 'IsDistribute',
      key: 'Key',
      pluginConfig: 'PluginConfig',
      stepName: 'StepName',
      stepType: 'StepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDistribute: 'boolean',
      key: 'string',
      pluginConfig: 'string',
      stepName: 'string',
      stepType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineByIdResponseBodyDataPipelineConfig extends $dara.Model {
  hops?: GetPipelineByIdResponseBodyDataPipelineConfigHops[];
  steps?: GetPipelineByIdResponseBodyDataPipelineConfigSteps[];
  static names(): { [key: string]: string } {
    return {
      hops: 'Hops',
      steps: 'Steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hops: { 'type': 'array', 'itemType': GetPipelineByIdResponseBodyDataPipelineConfigHops },
      steps: { 'type': 'array', 'itemType': GetPipelineByIdResponseBodyDataPipelineConfigSteps },
    };
  }

  validate() {
    if(Array.isArray(this.hops)) {
      $dara.Model.validateArray(this.hops);
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineByIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * PIPELINE
   */
  mode?: string;
  nodeInfo?: GetPipelineByIdResponseBodyDataNodeInfo;
  pipelineConfig?: GetPipelineByIdResponseBodyDataPipelineConfig;
  /**
   * @example
   * {}
   */
  pipelineJson?: string;
  /**
   * @example
   * 123
   */
  pipelineType?: number;
  /**
   * @example
   * {}
   */
  scheduleConfig?: string;
  /**
   * @example
   * {}
   */
  settings?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      nodeInfo: 'NodeInfo',
      pipelineConfig: 'PipelineConfig',
      pipelineJson: 'PipelineJson',
      pipelineType: 'PipelineType',
      scheduleConfig: 'ScheduleConfig',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      nodeInfo: GetPipelineByIdResponseBodyDataNodeInfo,
      pipelineConfig: GetPipelineByIdResponseBodyDataPipelineConfig,
      pipelineJson: 'string',
      pipelineType: 'number',
      scheduleConfig: 'string',
      settings: 'string',
    };
  }

  validate() {
    if(this.nodeInfo && typeof (this.nodeInfo as any).validate === 'function') {
      (this.nodeInfo as any).validate();
    }
    if(this.pipelineConfig && typeof (this.pipelineConfig as any).validate === 'function') {
      (this.pipelineConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineByIdResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetPipelineByIdResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPipelineByIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

