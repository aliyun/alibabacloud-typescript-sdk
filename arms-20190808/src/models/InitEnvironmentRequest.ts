// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: zh and en. Default value: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * Specifies whether to create a token to improve data security.
   * 
   * @example
   * false
   */
  createAuthToken?: boolean;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * Whether agents or exporters are managed. Valid values:
   * 
   * *   none: No. By default, no managed agents or exporters are provided for ACK clusters.
   * *   agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
   * *   agent-exproter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
   * 
   * @example
   * agent
   */
  managedType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      createAuthToken: 'CreateAuthToken',
      environmentId: 'EnvironmentId',
      managedType: 'ManagedType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      createAuthToken: 'boolean',
      environmentId: 'string',
      managedType: 'string',
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

