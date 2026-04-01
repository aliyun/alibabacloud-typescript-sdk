// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHostWebShellResponseBody extends $dara.Model {
  /**
   * @remarks
   * The webshell URL.
   * 
   * @example
   * ***
   */
  loginUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 842B73C8-5776-4BD9-9872-69C8C46DD7D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginUrl: 'LoginUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginUrl: 'string',
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

