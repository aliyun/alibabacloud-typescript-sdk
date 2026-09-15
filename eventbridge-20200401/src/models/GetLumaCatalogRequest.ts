// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLumaCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my_agent
   */
  agentName?: string;
  /**
   * @remarks
   * The name of the data catalog bound to the Agent. You can call ListLumaCatalogs to obtain the name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

