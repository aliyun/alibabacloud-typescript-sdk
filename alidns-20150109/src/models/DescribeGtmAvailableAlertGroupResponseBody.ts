// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAvailableAlertGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available alert groups of the GTM instance.
   */
  availableAlertGroup?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
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

