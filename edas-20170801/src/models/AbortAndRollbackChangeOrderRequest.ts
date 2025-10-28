// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortAndRollbackChangeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b55106c-c7f2-40f7-a1d4-092870*****
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

