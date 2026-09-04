// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearOperatingObjectFavoritesRequest extends $dara.Model {
  /**
   * @remarks
   * The graph name. You can call listGraphs to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * crm
   */
  graphName?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * This parameter is required.
   * 
   * @example
   * contract
   */
  objectType?: string;
  /**
   * @remarks
   * The operating object name, such as customer_1.
   * 
   * This parameter is required.
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The tenant ID to take effect.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
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

