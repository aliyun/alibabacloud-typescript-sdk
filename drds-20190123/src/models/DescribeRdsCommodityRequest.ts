// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsCommodityRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsPost
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The type of the order.
   * 
   * @example
   * 1
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      drdsInstanceId: 'DrdsInstanceId',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      drdsInstanceId: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

