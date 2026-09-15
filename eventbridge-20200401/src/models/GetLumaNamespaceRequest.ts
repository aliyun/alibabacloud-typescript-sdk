// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLumaNamespaceRequest extends $dara.Model {
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
   * The name of the data catalog bound to the Agent. You can call ListLumaCatalogs to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the namespace bound to the Agent. You can call ListLumaNamespaces to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      catalog: 'Catalog',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      catalog: 'string',
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

