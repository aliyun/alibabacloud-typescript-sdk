// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLumaKnowledgeBasesRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_agent
   */
  agentName?: string;
  /**
   * @remarks
   * The name of the data catalog bound to the agent. You can call ListLumaCatalogs to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the namespace bound to the agent. You can call ListLumaNamespaces to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      catalog: 'Catalog',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      catalog: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

