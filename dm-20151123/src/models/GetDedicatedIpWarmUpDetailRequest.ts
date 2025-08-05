// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDedicatedIpWarmUpDetailRequest extends $dara.Model {
  dedicatedIp?: string;
  endDayMark?: number;
  esp?: string;
  startDayMark?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedIp: 'DedicatedIp',
      endDayMark: 'EndDayMark',
      esp: 'Esp',
      startDayMark: 'StartDayMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedIp: 'string',
      endDayMark: 'number',
      esp: 'string',
      startDayMark: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

