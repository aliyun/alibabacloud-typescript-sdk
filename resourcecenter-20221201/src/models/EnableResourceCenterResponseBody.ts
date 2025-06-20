// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableResourceCenterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45357BEF-AB50-5E4D-B05D-5A882A4BE924
   */
  requestId?: string;
  /**
   * @remarks
   * The activation status of the service. Valid values:
   * 
   * *   Pending: The service is being activated.
   * *   Enabled: The service is activated.
   * 
   * @example
   * Pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

