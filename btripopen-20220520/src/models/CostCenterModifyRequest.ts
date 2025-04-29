// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostCenterModifyRequest extends $dara.Model {
  /**
   * @example
   * a@alipay.com
   */
  alipayNo?: string;
  disable?: number;
  /**
   * @example
   * 12345
   */
  number?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scope?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 340049
   */
  thirdpartId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      alipayNo: 'alipay_no',
      disable: 'disable',
      number: 'number',
      scope: 'scope',
      thirdpartId: 'thirdpart_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayNo: 'string',
      disable: 'number',
      number: 'string',
      scope: 'number',
      thirdpartId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

