// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier on the business system side, that is, the business ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 781
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 21577
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
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

