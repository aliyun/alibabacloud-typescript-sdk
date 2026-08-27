// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMcpRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. Fuzzy matches by instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  id?: string;
  /**
   * @remarks
   * The ID of the AgentTeams instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ins-xxx
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

