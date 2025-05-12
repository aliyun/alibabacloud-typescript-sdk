// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVccResponseBodyContentVpdBaseInfo extends $dara.Model {
  /**
   * @remarks
   * Network address segment
   * 
   * @example
   * 172.18.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1678379917000
   */
  createTime?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-ppdunxzc
   */
  vpdId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance name
   * 
   * @example
   * yzp-rg-test3
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      createTime: 'CreateTime',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      createTime: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

