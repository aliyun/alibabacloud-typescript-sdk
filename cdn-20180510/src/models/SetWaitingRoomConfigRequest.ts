// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetWaitingRoomConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The percentage of requests that are allowed to be redirected to the origin server. Valid values: **0** to **100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  allowPct?: number;
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The length of waiting time to skip after an exit from the queue. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  gapTime?: number;
  /**
   * @remarks
   * The maximum length of waiting time in the queue. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  maxTimeWait?: number;
  /**
   * @remarks
   * The regular expression that is used to match URI strings for which the virtual waiting room feature is enabled.
   * 
   * This parameter is required.
   */
  waitUri?: string;
  /**
   * @remarks
   * The URL of the waiting page.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/waitingroom.html
   */
  waitUrl?: string;
  static names(): { [key: string]: string } {
    return {
      allowPct: 'AllowPct',
      domainName: 'DomainName',
      gapTime: 'GapTime',
      maxTimeWait: 'MaxTimeWait',
      waitUri: 'WaitUri',
      waitUrl: 'WaitUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPct: 'number',
      domainName: 'string',
      gapTime: 'number',
      maxTimeWait: 'number',
      waitUri: 'string',
      waitUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

