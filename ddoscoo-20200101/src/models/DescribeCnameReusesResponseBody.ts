// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCnameReusesResponseBodyCnameReuses extends $dara.Model {
  cname?: string;
  domain?: string;
  enable?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      enable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameReusesResponseBody extends $dara.Model {
  cnameReuses?: DescribeCnameReusesResponseBodyCnameReuses[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnameReuses: 'CnameReuses',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameReuses: { 'type': 'array', 'itemType': DescribeCnameReusesResponseBodyCnameReuses },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cnameReuses)) {
      $dara.Model.validateArray(this.cnameReuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

