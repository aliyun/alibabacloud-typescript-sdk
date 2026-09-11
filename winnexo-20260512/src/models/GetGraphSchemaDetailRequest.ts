// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphSchemaDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the graph.
   * 
   * This parameter is required.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. You can pass this parameter explicitly by using `--tenant-id` in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

