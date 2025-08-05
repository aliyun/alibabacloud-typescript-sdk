// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDedicatedIpWarmUpDetailResponseBodyDetail extends $dara.Model {
  dayMark?: number;
  deliverCounts?: number;
  esp?: string;
  sendCounts?: number;
  static names(): { [key: string]: string } {
    return {
      dayMark: 'DayMark',
      deliverCounts: 'DeliverCounts',
      esp: 'Esp',
      sendCounts: 'SendCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayMark: 'number',
      deliverCounts: 'number',
      esp: 'string',
      sendCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDedicatedIpWarmUpDetailResponseBody extends $dara.Model {
  detail?: GetDedicatedIpWarmUpDetailResponseBodyDetail[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': GetDedicatedIpWarmUpDetailResponseBodyDetail },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

