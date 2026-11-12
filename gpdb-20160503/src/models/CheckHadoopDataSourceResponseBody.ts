// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHadoopDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned by the service. If the service is unavailable, an error message is returned. If the service is available, an empty string is returned.
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
   * The service status. Valid values:
   * 
   * - Running: The service is available.
   * 
   * - Failed: The service is unavailable.
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

