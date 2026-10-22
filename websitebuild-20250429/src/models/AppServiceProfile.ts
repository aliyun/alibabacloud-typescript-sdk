// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppServiceProfile extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250801003834000003
   */
  bizId?: string;
  /**
   * @remarks
   * The design type.
   * 
   * @example
   * Language_Pack
   */
  designType?: string;
  /**
   * @remarks
   * The design type description.
   * 
   * @example
   * Language pack
   */
  designTypeText?: string;
  /**
   * @remarks
   * The Lingxiao instance ID.
   * 
   * @example
   * lx-1
   */
  instanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 256146659280026
   */
  orderId?: string;
  /**
   * @remarks
   * The service specification.
   * 
   * @example
   * 8
   */
  serviceSpec?: string;
  /**
   * @remarks
   * The service specification description.
   * 
   * @example
   * Basic edition
   */
  serviceSpecText?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      designType: 'DesignType',
      designTypeText: 'DesignTypeText',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      serviceSpec: 'ServiceSpec',
      serviceSpecText: 'ServiceSpecText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      designType: 'string',
      designTypeText: 'string',
      instanceId: 'string',
      orderId: 'string',
      serviceSpec: 'string',
      serviceSpecText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

