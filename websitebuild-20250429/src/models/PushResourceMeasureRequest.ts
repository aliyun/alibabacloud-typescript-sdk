// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushResourceMeasureRequest extends $dara.Model {
  /**
   * @remarks
   * Resource usage amount
   * 
   * @example
   * 100
   */
  amount?: number;
  /**
   * @remarks
   * Belonging ID
   * 
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @remarks
   * Belonging ID Type (siteId, uid)
   * 
   * @example
   * USER
   */
  belongIdType?: string;
  /**
   * @remarks
   * Business ID associated with this push, such as session ID, Job ID, or file ID
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * Metering data, used to flexibly push multiple data points such as model invocation count and token usage (JSON string)
   * 
   * @example
   * {\\"MD5\\":\\"8ba46100bd898461f0f589704f2fad25\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"769\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":false,\\"uefi_preferred\\":false}
   */
  measureData?: string;
  /**
   * @remarks
   * Business extension metadata (in Map format, must be a JSON string)
   * 
   * @example
   * {\\"MD5\\":\\"8ba46100bd898461f0f589704f2fad25\\",\\"driver\\":\\"vhd\\",\\"flag\\":\\"769\\",\\"imds_support\\":\\"v1\\",\\"io_optimized\\":true,\\"nvme_supported\\":false,\\"uefi_preferred\\":false}
   */
  metaData?: string;
  /**
   * @remarks
   * Resource identity
   * 
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @remarks
   * Usage time, format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  useTime?: string;
  /**
   * @remarks
   * Usage type
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

