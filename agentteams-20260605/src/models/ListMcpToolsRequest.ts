// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpToolsRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. The exact match filter for instance status.
   * 
   * This parameter is required.
   * 
   * @example
   * RUNNING
   */
  id?: string;
  /**
   * @remarks
   * The AgentTeams instance ID.
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

