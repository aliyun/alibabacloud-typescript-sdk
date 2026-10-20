// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectorProperties extends $dara.Model {
  /**
   * @remarks
   * The channel type. Valid values: custom and apig. This parameter is optional for model_service. Default value: custom.
   * 
   * @example
   * custom
   */
  channelType?: string;
  /**
   * @remarks
   * Specifies the sample request body provided by the user to verify endpoint connectivity. This parameter is required when dryRun is set to All and type is set to agent_app. The request body is not persisted.
   * 
   * @example
   * {"input":"Hello"}
   */
  dryRunRequestBody?: string;
  /**
   * @remarks
   * The number of retry attempts after a failed service invocation when you invoke the synthetic monitoring registration service. Valid values: 0 to 10. Default value: 3.
   * 
   * @example
   * 3
   */
  maxRetries?: string;
  /**
   * @remarks
   * The list of supported models in comma-separated format. This parameter is required for model_service.
   * 
   * @example
   * qwen-max
   */
  modelList?: string;
  /**
   * @remarks
   * The network type. Valid values: internet and aliyun-vpc.
   * 
   * @example
   * internet
   */
  network?: string;
  /**
   * @remarks
   * The protocol type. Valid values: openai, openai-compatible, and anthropic. This parameter is required for model_service.
   * 
   * @example
   * openai-compatible
   */
  protocol?: string;
  /**
   * @remarks
   * The queries per second (QPS) limit for the dial test registration service. A value of 0 indicates no throttling. Otherwise, valid values are 0.1 to 1000. Default value: 20 for agent_app and 100 for model_service.
   * 
   * @example
   * 20
   */
  qpsLimit?: string;
  /**
   * @remarks
   * The region. This parameter is required when the network type is aliyun-vpc.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The JSONPath extraction path for the response body. This parameter is optional for agent_app.
   * 
   * @example
   * $.choices[0].message.content
   */
  responseBodyPath?: string;
  /**
   * @remarks
   * The ID of the security group. This parameter is optional for agent_app.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The timeout period for a single call in milliseconds. Valid values: 1000 to 1800000. Default value: 300000.
   * 
   * @example
   * 30000
   */
  timeoutMs?: string;
  /**
   * @remarks
   * The ID of the vSwitch. This parameter is optional for agent_app.
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). This parameter is optional for agent_app.
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      dryRunRequestBody: 'dryRunRequestBody',
      maxRetries: 'maxRetries',
      modelList: 'modelList',
      network: 'network',
      protocol: 'protocol',
      qpsLimit: 'qpsLimit',
      region: 'region',
      responseBodyPath: 'responseBodyPath',
      securityGroupId: 'securityGroupId',
      timeoutMs: 'timeoutMs',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      dryRunRequestBody: 'string',
      maxRetries: 'string',
      modelList: 'string',
      network: 'string',
      protocol: 'string',
      qpsLimit: 'string',
      region: 'string',
      responseBodyPath: 'string',
      securityGroupId: 'string',
      timeoutMs: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

