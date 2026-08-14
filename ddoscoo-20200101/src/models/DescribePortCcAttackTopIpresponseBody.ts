// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortCcAttackTopIPResponseBodyTopIp extends $dara.Model {
  areaId?: string;
  pv?: number;
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      pv: 'Pv',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      pv: 'number',
      srcIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortCcAttackTopIPResponseBody extends $dara.Model {
  requestId?: string;
  topIp?: DescribePortCcAttackTopIPResponseBodyTopIp[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topIp: 'TopIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topIp: { 'type': 'array', 'itemType': DescribePortCcAttackTopIPResponseBodyTopIp },
    };
  }

  validate() {
    if(Array.isArray(this.topIp)) {
      $dara.Model.validateArray(this.topIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

