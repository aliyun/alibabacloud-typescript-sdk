// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAvailableAlertGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned available alert groups.
   */
  availableAlertGroup?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAlertGroup: 'AvailableAlertGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAlertGroup: 'string',
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

