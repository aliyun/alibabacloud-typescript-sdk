// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIDCImportCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The generated import command.
   * 
   * @example
   * wget -q -O /tmp/install.sh http://edas-hz.oss-cn-hangzhou-internal.aliyuncs.com/install.sh && sh /tmp/install.sh -idcToken xxxx-xxxxx-xxxxx-xxxxxxx -edasId xxxxxxxxxxxxxx
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
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

