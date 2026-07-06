// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAgentStorage2VpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * remua-agent-test.cn-beijing.vpc.ots.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * 172.**.***.34
   */
  endpoint?: string;
  /**
   * @remarks
   * The request ID, which can be used to troubleshoot and locate issues.
   * 
   * @example
   * 39871ED2-62C0-578F-A32E-B88072D5582F
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

