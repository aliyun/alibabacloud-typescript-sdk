// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDataImportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the import task is successful.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The response message. >This parameter is empty if the request is successful. If the request fails, an error message is returned, such as an error code.
   * 
   * @example
   * *****
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

