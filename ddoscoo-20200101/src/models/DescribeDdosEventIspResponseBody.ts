// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventIspResponseBodyIsps extends $dara.Model {
  inPkts?: number;
  isp?: string;
  static names(): { [key: string]: string } {
    return {
      inPkts: 'InPkts',
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inPkts: 'number',
      isp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDosEventIspResponseBody extends $dara.Model {
  isps?: DescribeDDosEventIspResponseBodyIsps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribeDDosEventIspResponseBodyIsps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.isps)) {
      $dara.Model.validateArray(this.isps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

