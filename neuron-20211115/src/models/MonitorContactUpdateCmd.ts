// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorContactUpdateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx@alibaba.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 尚仁
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15113456789
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      id: 'id',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'number',
      name: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

