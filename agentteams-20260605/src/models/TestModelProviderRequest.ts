// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The model name. Optional. Filters by fuzzy match on instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  modelName?: string;
  /**
   * @remarks
   * The content of the test prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello, how are you?
   */
  prompt?: string;
  /**
   * @remarks
   * The provider ID. Optional. Filters by exact match on instance status.
   * 
   * This parameter is required.
   * 
   * @example
   * RUNNING
   */
  providerId?: string;
  /**
   * @remarks
   * The name of the model provider.
   * 
   * This parameter is required.
   * 
   * @example
   * my-provider
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

