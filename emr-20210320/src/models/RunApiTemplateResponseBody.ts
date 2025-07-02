// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunApiTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"clusterId\\":\\"c-b7be171f1928****\\",\\"operationId\\":\\"op-61126efe629d****\\"}
   */
  data?: string;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

