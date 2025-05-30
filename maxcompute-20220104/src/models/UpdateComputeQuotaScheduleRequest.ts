// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateComputeQuotaScheduleRequestBody } from "./UpdateComputeQuotaScheduleRequestBody";


export class UpdateComputeQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: UpdateComputeQuotaScheduleRequestBody[];
  scheduleTimezone?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      scheduleTimezone: 'scheduleTimezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateComputeQuotaScheduleRequestBody },
      scheduleTimezone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

