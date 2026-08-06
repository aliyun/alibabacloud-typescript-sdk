// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineByIdResponseBodyDataNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * comment
   */
  desc?: string;
  /**
   * @remarks
   * The folder of the integration pipeline node. The default value is the root folder. This folder must exist. If it does not exist, call the relevant API operation to create a folder of the offlinePipeline type.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The pipeline file ID. This value is empty during initial creation. When updating a pipeline node, at least one of pipelineId, fileId, or nodeId must be specified.
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The scheduling node ID of the pipeline node. This value is empty during initial creation. When updating a pipeline node, at least one of pipelineId, fileId, or nodeId must be specified.
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the integration pipeline node.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The pipeline node ID. This value is empty during initial creation. When updating a pipeline node, at least one of pipelineId, fileId, or nodeId must be specified.
   * 
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
  /**
   * @remarks
   * Specifies the conditional distribution setting. Set this parameter to true when the downstream condition is true for a conditional distribution component. Otherwise, set it to false.
   */
  sendTo?: boolean;
  /**
   * @remarks
   * The input step name, which corresponds to Steps[*].StepName.
   * 
   * @example
   * mysql_reader
   */
  source?: string;
  /**
   * @remarks
   * The output step name, which corresponds to Steps[*].StepName.
   * 
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
  /**
   * @remarks
   * Specifies the data distribution mode when the current component has multiple downstream components. Valid values:
   * - true: the data of the current component is distributed to all downstream components in a round-robin manner. For example, if the current component has 100 records and two downstream components, each downstream component receives 50 records. Default value: true.
   * - false: the full data of the current component is sent to all downstream components. For example, if the current component has 100 records and two downstream components, both downstream components receive 100 records.
   */
  isDistribute?: boolean;
  /**
   * @remarks
   * The plugin ID. Each plugin has a unique identifier. Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepKey. Developers should inherit this component configuration class and implement the corresponding component configuration. Each component configuration has the same structure as the pipeline configuration created on the Dataphin console.
   * 
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @remarks
   * The specific component configuration in JSON string format. Refer to the toJsonString method of the subclasses of the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig. Developers should inherit this component configuration class and implement the corresponding component configuration. Each component configuration has the same structure as the pipeline configuration created on the Dataphin console.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * The step name. Step names must be unique within the same pipeline node.
   * 
   * @example
   * mysql_reader
   */
  stepName?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * - input: an input component.
   * - output: an output component.
   * - transfrom: a transform component.
   * - process: a flow control component.
   * 
   * Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepType. Developers should inherit this component configuration class and implement the corresponding component configuration. Each component configuration has the same structure as the pipeline configuration created on the Dataphin console.
   * 
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
  /**
   * @remarks
   * The directed acyclic graph (DAG) link configuration that describes the connections between all components.
   */
  hops?: GetPipelineByIdResponseBodyDataPipelineConfigHops[];
  /**
   * @remarks
   * The component configurations, which contain the detailed configurations of all components used.
   */
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
   * @remarks
   * The integration pipeline configuration mode.
   * 
   * @example
   * PIPELINE
   */
  mode?: string;
  /**
   * @remarks
   * The basic information of the pipeline node.
   */
  nodeInfo?: GetPipelineByIdResponseBodyDataNodeInfo;
  /**
   * @remarks
   * The integration pipeline component configuration.
   */
  pipelineConfig?: GetPipelineByIdResponseBodyDataPipelineConfig;
  /**
   * @remarks
   * The integration pipeline script mode configuration.
   * 
   * @example
   * {}
   */
  pipelineJson?: string;
  /**
   * @remarks
   * The pipeline node type.
   * 
   * @example
   * 123
   */
  pipelineType?: number;
  /**
   * @remarks
   * The integration pipeline scheduling configuration. The value is a JSON string. You can use the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.vo.OAScheduleConfigVO to deserialize it.
   * 
   * @example
   * {}
   */
  scheduleConfig?: string;
  /**
   * @remarks
   * The integration pipeline channel configuration. The value is a JSON string. You can use the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAPipelineSetting to deserialize it.
   * 
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
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The pipeline node details.
   */
  data?: GetPipelineByIdResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
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
   * @remarks
   * Indicates whether the request was successful.
   * 
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

