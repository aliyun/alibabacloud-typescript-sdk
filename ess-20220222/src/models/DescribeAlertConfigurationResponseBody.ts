// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the scaling activities that trigger text message, internal message, or email-based notifications.
   */
  scaleStatuses?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scaleStatuses: 'ScaleStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scaleStatuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scaleStatuses)) {
      $dara.Model.validateArray(this.scaleStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

