// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronProductScope extends $dara.Model {
  /**
   * @example
   * order
   */
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  /**
   * @example
   * 读取订单数据
   */
  name?: string;
  /**
   * @example
   * 1
   */
  productId?: number;
  /**
   * @example
   * readOrder
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      name: 'name',
      productId: 'productId',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      name: 'string',
      productId: 'number',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

