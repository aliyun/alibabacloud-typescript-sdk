// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssStatusV2Request extends $dara.Model {
  /**
   * @remarks
   * The ServiceCode of the ID Verification product. Valid values:
   * - **antcloudauth**: financial-grade ID Verification.
   * - **cloudauthst (discontinued)**: enhanced ID Verification.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 120.25.41.25
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

