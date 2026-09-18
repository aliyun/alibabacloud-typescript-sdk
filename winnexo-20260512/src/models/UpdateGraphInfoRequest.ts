// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGraphInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business description of the knowledge graph. If not configured, the value is an empty string.
   * 
   * @example
   * Customer domain knowledge graph
   */
  businessProfile?: string;
  /**
   * @remarks
   * The display name of the knowledge graph.
   * 
   * @example
   * CRM Graph
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the knowledge graph.
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
      displayName: 'displayName',
      graphName: 'graphName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessProfile: 'string',
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

