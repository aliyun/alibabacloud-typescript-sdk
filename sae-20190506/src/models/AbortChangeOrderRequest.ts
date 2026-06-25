// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortChangeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change order.
   * 
   * This parameter is required.
   * 
   * @example
   * be2e1c76-682b-4897-98d3-1d8d6478****
   */
  changeOrderId?: string;
  /**
   * @remarks
   * Specifies whether to roll back the change order.
   * 
   * @example
   * true
   */
  rollback?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
      rollback: 'Rollback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
      rollback: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

