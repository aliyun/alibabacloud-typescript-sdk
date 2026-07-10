// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The service code. Valid values:
   * - antcloudauth: Chinese financial-grade ID Verification.
   * - cloudauthst (discontinued): ID Verification Enhanced Edition.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

