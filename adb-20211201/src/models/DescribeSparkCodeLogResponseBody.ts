// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkCodeLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * >>>>>>>> stdout:n++++++++++++++++++executing sql: MSCK REPAIR TABLE  `footprint_ethereum`.`dwd_eth_eth_txr_v2_di` n++n
   */
  log?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, **Success** is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CD65640-9963-5D60-929C-118F2C84070E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: 'string',
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

