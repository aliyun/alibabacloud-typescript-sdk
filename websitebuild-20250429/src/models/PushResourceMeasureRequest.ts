// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushResourceMeasureRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  amount?: number;
  /**
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @example
   * USER
   */
  belongIdType?: string;
  /**
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @example
   * {\\"MD5\\":\\"8ba46100bd898461f0f589704f2fad25\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"769\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":false,\\"uefi_preferred\\":false}
   */
  measureData?: string;
  /**
   * @example
   * {\\"MD5\\":\\"8ba46100bd898461f0f589704f2fad25\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"769\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":false,\\"uefi_preferred\\":false}
   */
  metaData?: string;
  /**
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  useTime?: string;
  /**
   * @example
   * MANUAL_BIZ
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      belongId: 'BelongId',
      belongIdType: 'BelongIdType',
      bizId: 'BizId',
      measureData: 'MeasureData',
      metaData: 'MetaData',
      resourceCode: 'ResourceCode',
      useTime: 'UseTime',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      belongId: 'string',
      belongIdType: 'string',
      bizId: 'string',
      measureData: 'string',
      metaData: 'string',
      resourceCode: 'string',
      useTime: 'string',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

