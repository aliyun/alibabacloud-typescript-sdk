// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSlbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the change order. It can be used to query the task status.
   * 
   * @example
   * 01db03d3-3ee9-48b3-b3d0-dfce2d88****
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

