// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainItemsResponseBodyDomainItems extends $dara.Model {
  /**
   * @remarks
   * The time when the entry was created.
   * 
   * @example
   * 2026-08-01 10:20:30
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the entry was last modified.
   * 
   * @example
   * 2026-08-01 10:20:30
   */
  gmtModified?: string;
  /**
   * @example
   * 499
   */
  itemId?: number;
  /**
   * @remarks
   * The domain name. Wildcard domain names are supported.
   * 
   * @example
   * www.example.com
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      itemId: 'ItemId',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      itemId: 'number',
      itemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain name entries.
   */
  domainItems?: ListDomainItemsResponseBodyDomainItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 019F68B5-2D0D-5399-9BB2-D81C13C2C05D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the specified conditions. This is an optional parameter and may not be returned by default.
   * 
   * @example
   * 13
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      domainItems: 'DomainItems',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItems: { 'type': 'array', 'itemType': ListDomainItemsResponseBodyDomainItems },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainItems)) {
      $dara.Model.validateArray(this.domainItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

