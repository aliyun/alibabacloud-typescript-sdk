// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReserveDomainRequest extends $dara.Model {
  /**
   * @example
   * 4
   */
  channels?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyun.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

