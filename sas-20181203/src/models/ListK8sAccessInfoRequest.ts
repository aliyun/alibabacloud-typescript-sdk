// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sAccessInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayApiName?: string;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayPopName?: string;
  /**
   * @remarks
   * This parameter is deprecated and does not need to be specified.
   * 
   * @example
   * None
   */
  aliyunYundunGatewayProjectName?: string;
  /**
   * @remarks
   * The language type for requests and responses. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunYundunGatewayApiName: 'AliyunYundunGatewayApiName',
      aliyunYundunGatewayPopName: 'AliyunYundunGatewayPopName',
      aliyunYundunGatewayProjectName: 'AliyunYundunGatewayProjectName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunYundunGatewayApiName: 'string',
      aliyunYundunGatewayPopName: 'string',
      aliyunYundunGatewayProjectName: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

