// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopsResponseBodyDesktopsClients extends $dara.Model {
  /**
   * @remarks
   * 客户端类型，取值：
   * 
   * - macos：Mac客户端
   * - ios：IOS客户端
   * - android：Android客户端
   * - html5：Web客户端
   * - windows：Windows客户端
   * - linux：Linux客户端
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * 客户端状态，取值：
   * 
   * - ON：允许登录
   * - OFF：不允许登录
   * 
   * @example
   * ON
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

