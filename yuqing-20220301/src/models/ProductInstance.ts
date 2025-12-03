// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductInstance extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EUWYEEQ
   */
  appCode?: string;
  /**
   * @example
   * xxx
   */
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ID2343231321
   */
  buyerUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALIYUN
   */
  channel?: string;
  /**
   * @example
   * {}
   */
  config?: string;
  /**
   * @example
   * 1640292843231
   */
  end?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ID3928389103844
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * D23938474923u42
   */
  orderNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * C394884
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * C847573
   */
  productSpecCode?: string;
  /**
   * @example
   * 1640292843231
   */
  start?: number;
  /**
   * @example
   * XXX
   */
  tenantName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UID284747383
   */
  tenantUid?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'appCode',
      buyerName: 'buyerName',
      buyerUid: 'buyerUid',
      channel: 'channel',
      config: 'config',
      end: 'end',
      instanceId: 'instanceId',
      orderNo: 'orderNo',
      productCode: 'productCode',
      productSpecCode: 'productSpecCode',
      start: 'start',
      tenantName: 'tenantName',
      tenantUid: 'tenantUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      buyerName: 'string',
      buyerUid: 'string',
      channel: 'string',
      config: 'string',
      end: 'number',
      instanceId: 'string',
      orderNo: 'string',
      productCode: 'string',
      productSpecCode: 'string',
      start: 'number',
      tenantName: 'string',
      tenantUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

