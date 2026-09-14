// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectorProperties extends $dara.Model {
  /**
   * @remarks
   * The channel type: custom or apig. This parameter is optional for model_service and defaults to custom.
   */
  channelType?: string;
  /**
   * @remarks
   * The sample request body provided by the user for verifying endpoint connectivity. This parameter is required when dryRun is set to All and type is set to agent_app. The value is not persisted.
   */
  dryRunRequestBody?: string;
  /**
   * @remarks
   * The number of retries after a failed invocation of the dial-test registration service. Valid values: 0 to 10. Default value: 3.
   * 
   * @example
   * 3
   */
  maxRetries?: string;
  /**
   * @remarks
   * The list of supported models in comma-separated format. This parameter is required for model_service.
   */
  modelList?: string;
  /**
   * @remarks
   * The network type: internet or aliyun-vpc.
   */
  network?: string;
  /**
   * @remarks
   * The protocol type: openai, openai-compatible, or anthropic. This parameter is required for model_service.
   */
  protocol?: string;
  /**
   * @remarks
   * The QPS limit for the dial-test registration service. A value of 0 indicates no throttling. Otherwise, valid values: 0.1 to 1000. Default value: 20 for agent_app, 100 for model_service.
   * 
   * @example
   * 20
   */
  qpsLimit?: string;
  /**
   * @remarks
   * The region. This parameter is required when the network type is aliyun-vpc.
   */
  region?: string;
  /**
   * @remarks
   * The JSON Path extraction path for the response body. This parameter is optional for agent_app.
   */
  responseBodyPath?: string;
  /**
   * @remarks
   * The security group ID. This parameter is optional for agent_app.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The timeout for a single call, in milliseconds. Valid values: 1000 to 1800000. Default value: 300000.
   * 
   * @example
   * 30000
   */
  timeoutMs?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is optional for agent_app.
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID. This parameter is optional for agent_app.
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

