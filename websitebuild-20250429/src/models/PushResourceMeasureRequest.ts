// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushResourceMeasureRequest extends $dara.Model {
  /**
   * @remarks
   * The resource usage amount.
   * 
   * @example
   * 100
   */
  amount?: number;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @remarks
   * The type of the owner ID (siteId or uid).
   * 
   * @example
   * USER
   */
  belongIdType?: string;
  /**
   * @remarks
   * The business ID associated with this push, such as a session ID, task ID, or file ID.
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * The metering data used to flexibly push multiple data points such as the number of model calls and token usage. The value must be a JSON string.
   * 
   * @example
   * {\\"MD5\\":\\"8ba46100bd898461f0f589704f2fad25\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"769\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":false,\\"uefi_preferred\\":false}
   */
  measureData?: string;
  /**
   * @remarks
   * The business extension metadata in Map format. The value must be a JSON string.
   * 
   * @example
   * {\\"MD5\\":\\"8ba46100bd898461f0f589704f2fad25\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"769\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":false,\\"uefi_preferred\\":false}
   */
  metaData?: string;
  /**
   * @remarks
   * The resource identifier.
   * 
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @remarks
   * The usage time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  useTime?: string;
  /**
   * @remarks
   * The usage type.
   * 
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

