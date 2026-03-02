// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorContact extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * al2i@sina.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0
   */
  isVerify?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yani
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15117923456
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      enterpriseId: 'enterpriseId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      isVerify: 'isVerify',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      enterpriseId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isVerify: 'number',
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

