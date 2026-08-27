// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the model provider.
   * 
   * This parameter is required.
   * 
   * @example
   * p-xxx
   */
  id?: string;
  /**
   * @remarks
   * Optional. Fuzzy matches by instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

