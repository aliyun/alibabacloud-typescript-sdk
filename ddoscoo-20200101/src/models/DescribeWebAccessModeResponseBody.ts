// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAccessModeResponseBodyDomainModes extends $dara.Model {
  /**
   * @remarks
   * The mode in which the website service is added. Valid values:
   * 
   * *   **0**: A record
   * *   **1**: anti-DDoS mode
   * *   **2**: origin redundancy mode
   * 
   * @example
   * 0
   */
  accessMode?: number;
  /**
   * @remarks
   * The domain name of the website.
   * 
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

export class DescribeWebAccessModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the modes in which the website service is added.
   */
  domainModes?: DescribeWebAccessModeResponseBodyDomainModes[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
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

