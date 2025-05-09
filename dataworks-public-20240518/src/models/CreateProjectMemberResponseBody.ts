// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 2B2F0B26-9253-5780-B6DB-F1A886D44D6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

