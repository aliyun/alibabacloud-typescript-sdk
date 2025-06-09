// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindNlbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the change order. The ID can be used to query the status of the change task.
   * 
   * @example
   * ba386059-69b1-4e65-b1e5-0682d9fa****
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

