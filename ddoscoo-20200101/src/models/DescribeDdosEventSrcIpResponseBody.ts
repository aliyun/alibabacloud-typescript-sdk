// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventSrcIpResponseBodyIps extends $dara.Model {
  areaId?: string;
  isp?: string;
  srcIp?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      isp: 'Isp',
      srcIp: 'SrcIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      isp: 'string',
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

export class DescribeDDosEventSrcIpResponseBody extends $dara.Model {
  ips?: DescribeDDosEventSrcIpResponseBodyIps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: { 'type': 'array', 'itemType': DescribeDDosEventSrcIpResponseBodyIps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

