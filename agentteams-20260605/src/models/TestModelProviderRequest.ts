// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  modelName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RUNNING
   */
  providerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      modelName: 'ModelName',
      prompt: 'Prompt',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      modelName: 'string',
      prompt: 'string',
      providerId: 'string',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

