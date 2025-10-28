// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackChangeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process.
   * 
   * This parameter is required.
   * 
   * @example
   * dc5133d7-773f-4c81-****-e2103dce****
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

