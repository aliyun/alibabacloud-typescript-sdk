// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformClusterMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the response.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned. If the request is successful, `Transform submit success!` is returned.
   * 
   * @example
   * Transform submit success!
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
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-****
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
      code: 'number',
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

