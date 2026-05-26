// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HistoryThreeElementsVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  authCode?: string;
  /**
   * @example
   * CMCC
   */
  carrier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  certCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  inputNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  mask?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
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

