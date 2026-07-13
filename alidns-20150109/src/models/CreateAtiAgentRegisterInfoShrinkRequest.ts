// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAtiAgentRegisterInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the agent capabilities.
   * 
   * @example
   * 支付服务
   */
  agentDescription?: string;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试Agent
   */
  agentDisplayName?: string;
  /**
   * @remarks
   * The endpoint domain name through which the agent provides services.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  agentHost?: string;
  /**
   * @remarks
   * The version of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.1
   */
  agentVersion?: string;
  /**
   * @remarks
   * Provides idempotency. Within 3 minutes, the same value takes effect only once.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint information of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"EndpointValue\\":\\"http://www.baidu.com\\",\\"EndpointType\\":\\"http\\"}]
   */
  endpointsShrink?: string;
  /**
   * @remarks
   * The ID of the verified registrant. Obtain this ID by invoking the identity verification API operation or from the ATS console.
   * 
   * This parameter is required.
   * 
   * @example
   * 2072277378616354816
   */
  registrantId?: string;
  static names(): { [key: string]: string } {
    return {
      agentDescription: 'AgentDescription',
      agentDisplayName: 'AgentDisplayName',
      agentHost: 'AgentHost',
      agentVersion: 'AgentVersion',
      clientToken: 'ClientToken',
      endpointsShrink: 'Endpoints',
      registrantId: 'RegistrantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDescription: 'string',
      agentDisplayName: 'string',
      agentHost: 'string',
      agentVersion: 'string',
      clientToken: 'string',
      endpointsShrink: 'string',
      registrantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

