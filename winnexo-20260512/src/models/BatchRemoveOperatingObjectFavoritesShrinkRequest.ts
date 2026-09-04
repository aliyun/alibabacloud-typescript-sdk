// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRemoveOperatingObjectFavoritesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The graph name.
   * 
   * This parameter is required.
   * 
   * @example
   * crm
   */
  graphName?: string;
  /**
   * @remarks
   * The list of primary object business IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * contract-001
   */
  objectIdsShrink?: string;
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
   * The operating object name.
   * 
   * This parameter is required.
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. Pass it explicitly in winnexo-cli by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectIdsShrink: 'objectIds',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectIdsShrink: 'string',
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

