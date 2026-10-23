// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGraphRequest extends $dara.Model {
  /**
   * @remarks
   * The business description of the graph. If not configured, it is an empty string.
   * 
   * @example
   * Customer domain semantic graph
   */
  businessProfile?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 198001
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * CRM Graph
   */
  displayName?: string;
  /**
   * @remarks
   * The graph name.
   * 
   * This parameter is required.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      businessProfile: 'businessProfile',
      dataSourceId: 'dataSourceId',
      displayName: 'displayName',
      graphName: 'graphName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
      dataSourceId: 'number',
      displayName: 'string',
      graphName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

