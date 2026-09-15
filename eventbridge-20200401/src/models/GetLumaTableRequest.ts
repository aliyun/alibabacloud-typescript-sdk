// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLumaTableRequest extends $dara.Model {
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
   * The name of the data catalog bound to the Agent. You can call ListLumaCatalogs to obtain the catalog name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the event table bound to the Agent. You can call ListLumaTables to obtain the event table name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_table
   */
  name?: string;
  /**
   * @remarks
   * The name of the namespace bound to the Agent. You can call ListLumaNamespaces to obtain the namespace name.
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
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      catalog: 'string',
      name: 'string',
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

