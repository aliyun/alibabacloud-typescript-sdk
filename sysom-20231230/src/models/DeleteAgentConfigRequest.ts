// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the component associated with the configuration to be deleted.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the component configuration to delete.
   * 
   * @example
   * 4d5ecf02-3d01-11f0-8c90-00163e1029af
   */
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      configId: 'configId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      configId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

