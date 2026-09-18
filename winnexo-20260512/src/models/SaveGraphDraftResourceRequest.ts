// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGraphDraftResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The element type. Currently, only text is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * object_type
   */
  elementType?: string;
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
   * The resource name.
   * 
   * This parameter is required.
   * 
   * @example
   * customer
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is set to **instance**, which indicates that the resource type is instance.
   * 
   * This parameter is required.
   * 
   * @example
   * object
   */
  resourceType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The original YAML text of the graph schema trimmed by READ permissions, with $ref references within the authorized subgraph retained.
   * 
   * This parameter is required.
   * 
   * @example
   * name: customer\\ndisplay_name: Customer
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      elementType: 'elementType',
      graphName: 'graphName',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      tenantId: 'tenantId',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elementType: 'string',
      graphName: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tenantId: 'string',
      yamlEdit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

