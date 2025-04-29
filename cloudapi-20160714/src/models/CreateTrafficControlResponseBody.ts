// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficControlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the throttling policy.
   * 
   * @example
   * tf123456
   */
  trafficControlId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlId: 'TrafficControlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

