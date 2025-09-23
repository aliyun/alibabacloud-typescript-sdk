// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainAccessModeResponseBodyDomainModeList extends $dara.Model {
  /**
   * @example
   * 1
   */
  accessMode?: number;
  /**
   * @example
   * www.aliyun.com
   */
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

export class DescribeDomainAccessModeResponseBody extends $dara.Model {
  domainModeList?: DescribeDomainAccessModeResponseBodyDomainModeList[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainModeList: 'DomainModeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainModeList: { 'type': 'array', 'itemType': DescribeDomainAccessModeResponseBodyDomainModeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainModeList)) {
      $dara.Model.validateArray(this.domainModeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

