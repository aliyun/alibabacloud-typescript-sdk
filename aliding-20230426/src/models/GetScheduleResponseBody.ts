// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetScheduleResponseBodyScheduleInformation } from "./GetScheduleResponseBodyScheduleInformation";


export class GetScheduleResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  scheduleInformation?: GetScheduleResponseBodyScheduleInformation[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      scheduleInformation: 'scheduleInformation',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scheduleInformation: { 'type': 'array', 'itemType': GetScheduleResponseBodyScheduleInformation },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scheduleInformation)) {
      $dara.Model.validateArray(this.scheduleInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

