// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HistoryThreeElementsVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code. You can obtain it from the following sources:
   * 
   * - On the [Tag Plaza](https://dytns.console.aliyun.com/analysis/square) page in the Phone Number Intelligence console, select the **three-element ID verification** tag and submit an application. You will receive an authorization code after the application is approved.
   * 
   * - On the [My Applications](https://dytns.console.aliyun.com/analysis/apply) page in the Phone Number Intelligence console, find the authorization ID for your approved **three-element ID verification** service.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  authCode?: string;
  /**
   * @remarks
   * The carrier to query. By default, the system queries the number\\"s carrier of record. Specify this parameter to route the query to a specific carrier.
   * 
   * Valid values:
   * 
   * - `CMCC`: China Mobile
   * 
   * - `CUCC`: China Unicom
   * 
   * - `CTCC`: China Telecom
   * 
   * > Due to number portability, a ported number\\"s historical carrier may be unknown. Use this parameter to explicitly query a specific carrier. If omitted, the query defaults to the number\\"s current carrier of record.
   * >
   * > **Important** Specifying China Broadcasting Network is not supported and results in an HTTP 400 error.
   * 
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * The ID number to verify.
   * 
   * - If `Mask` is set to `NORMAL`, the value of this parameter is in plaintext.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  certCode?: string;
  /**
   * @remarks
   * The phone number to query.
   * 
   * - If `Mask` is set to `NORMAL`, this parameter must be an 11-digit mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  inputNumber?: string;
  /**
   * @remarks
   * The encryption method. Valid value:
   * 
   * - **NORMAL**: The phone number is not encrypted.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  mask?: string;
  /**
   * @remarks
   * The name to verify.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The historical point in time to verify, in `yyyyMMddHHmmss` format. If the specific time of day is unknown, set the `HHmmss` portion to `000000`. For example, `20230615000000` verifies ownership as of June 15, 2023.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  verificationTime?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      carrier: 'Carrier',
      certCode: 'CertCode',
      inputNumber: 'InputNumber',
      mask: 'Mask',
      name: 'Name',
      verificationTime: 'VerificationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      carrier: 'string',
      certCode: 'string',
      inputNumber: 'string',
      mask: 'string',
      name: 'string',
      verificationTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

