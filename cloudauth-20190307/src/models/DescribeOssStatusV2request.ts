// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssStatusV2Request extends $dara.Model {
  /**
   * @remarks
   * ServiceCode for Real Person Cloud products:
   * - **antcloudauth**: Financial-grade real person authentication
   * - **cloudauthst (discontinued)**: Enhanced real person authentication
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Visitor\\"s source IP address.
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

