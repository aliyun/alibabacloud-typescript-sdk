// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeHiStoreInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates that the request was successful. An error message was returned if the request failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-23ERW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

