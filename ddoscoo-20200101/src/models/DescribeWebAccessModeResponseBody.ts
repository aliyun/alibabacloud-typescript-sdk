// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAccessModeResponseBodyDomainModes extends $dara.Model {
  accessMode?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'number',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebAccessModeResponseBody extends $dara.Model {
  domainModes?: DescribeWebAccessModeResponseBodyDomainModes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainModes: 'DomainModes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainModes: { 'type': 'array', 'itemType': DescribeWebAccessModeResponseBodyDomainModes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainModes)) {
      $dara.Model.validateArray(this.domainModes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

