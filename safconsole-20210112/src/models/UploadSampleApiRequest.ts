// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSampleApiRequest extends $dara.Model {
  /**
   * @remarks
   * The data type of the sample
   * 
   * - Phone number: mobile
   * - MD5 of phone number: mobileMd5
   * - IP: ip
   * - Unique device ID: umid
   * - Account ID: accountId
   * - IMEI: imei
   * - MD5 of IMEI: imeiMd5
   * - OAID: oaid
   * - MD5 of OAID: oaidMd5
   * - Android ID: androidId
   * - MD5 of Android ID: androidIdMd5
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  dataType?: string;
  /**
   * @remarks
   * Specific value of the sample, to be passed in JSON format. Do not exceed 1000 entries at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * ["123.124.125.126","123.124.125.127"]
   */
  dataValue?: string;
  /**
   * @remarks
   * The type of the sample
   * 
   * - Blacklist: block
   * 
   * - Whitelist: pass
   * 
   * This parameter is required.
   * 
   * @example
   * block
   */
  sampleType?: string;
  /**
   * @remarks
   * List of effective services, separate multiple services with commas
   * 
   * - Basic/Enhanced Registration Risk Identification: account_abuse
   * - Basic/Enhanced Marketing Risk Identification: coupon_abuse
   * - Basic/Enhanced Login Risk Identification: account_takeover
   * 
   * This parameter is required.
   * 
   * @example
   * account_abuse,coupon_abuse,account_takeover
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      dataValue: 'DataValue',
      sampleType: 'SampleType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      dataValue: 'string',
      sampleType: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

