// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEvaluateAndImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task is deleted.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned message. > This parameter is empty when the request succeeds. If the request fails, an exception message is returned, such as an error code.
   * 
   * @example
   * msg
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14036EBE-***-44DB-ACE9-AC6157D3A6FC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

