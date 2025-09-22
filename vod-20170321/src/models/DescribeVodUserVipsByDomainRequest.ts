// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodUserVipsByDomainRequest extends $dara.Model {
  /**
   * @example
   * on
   */
  available?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
      domainName: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

