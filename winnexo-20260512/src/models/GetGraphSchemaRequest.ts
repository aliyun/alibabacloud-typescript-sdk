// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The knowledge graph name. Call listGraphs to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 21577
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

