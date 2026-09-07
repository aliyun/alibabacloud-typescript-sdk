// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: zh and en. Default: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * Whether to create an authentication token for enhanced data security.
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
   * The agent management mode. Valid values:
   * 
   * - none: unmanaged. Default for ACK clusters.
   * 
   * - agent: managed agents only. Default for ASK, ACS, and ACK One clusters.
   * 
   * - agent-exproter: managed agents and exporters. Default for cloud services.
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

