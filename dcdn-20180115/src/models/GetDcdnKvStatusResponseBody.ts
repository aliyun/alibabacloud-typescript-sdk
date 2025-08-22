// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDcdnKvStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the configured key has taken effect on all points of presence (POPs).
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * The timeout period of the configured key. The value is an absolute timestamp, such as 2023-09-11T15:39:44+08:00. This parameter is not returned if the key is permanently stored.
   * 
   * @example
   * 2023-09-11T15:39:44+08:00
   */
  expire?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      expire: 'Expire',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      expire: 'string',
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

