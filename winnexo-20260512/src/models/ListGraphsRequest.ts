// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGraphsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tenant to which the node belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 21577
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

