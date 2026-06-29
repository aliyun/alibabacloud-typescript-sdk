// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindInstance2VpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * xu6666-mkdd-test.cn-hangzhou.vpc.ots.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The connection endpoint for the instance.
   * 
   * @example
   * 172.**.***.34
   */
  endpoint?: string;
  /**
   * @remarks
   * The ID of the request. Use this ID to troubleshoot issues.
   * 
   * @example
   * E734979F-5A44-5993-9CE5-C23103576923
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endpoint: 'Endpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endpoint: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

