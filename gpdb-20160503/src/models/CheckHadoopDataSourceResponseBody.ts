// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHadoopDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message. If the service failed, an error message is returned. Otherwise, a pair of double quotation marks ("") is returned.
   * 
   * @example
   * serivce unavaliable
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   Running
   * *   Failed
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

