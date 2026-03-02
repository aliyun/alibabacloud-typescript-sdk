// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronAppUpdateCmd extends $dara.Model {
  /**
   * @example
   * 升级订单功能
   */
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * NEW
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      id: 'id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      id: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

