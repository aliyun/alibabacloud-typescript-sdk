// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RumDnsResponse extends $dara.Model {
  /**
   * @remarks
   * RUM上报域名
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * 初始化message（失败场景）
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * 域名DNS初始化状态
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      message: 'message',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      message: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

