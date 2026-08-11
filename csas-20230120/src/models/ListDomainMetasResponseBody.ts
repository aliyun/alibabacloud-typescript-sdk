// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainMetasResponseBodyDomainMetas extends $dara.Model {
  /**
   * @remarks
   * The time when the list was created.
   * 
   * @example
   * 2026-08-01 10:20:30
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the list was last modified.
   * 
   * @example
   * 2026-08-02 15:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The number of domain name entries in the list.
   * 
   * @example
   * 128
   */
  itemCount?: number;
  /**
   * @remarks
   * The list ID, which is a unique business identifier used for policy references and CRUD operations.
   * 
   * @example
   * ladl-8acxxxa0f2a7daf9
   */
  listId?: string;
  /**
   * @remarks
   * The list type.
   * 
   * @example
   * la_domain_white_list
   */
  listType?: string;
  /**
   * @remarks
   * The list name.
   * 
   * @example
   * OfficeDomainWhitelist
   */
  name?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * RS_ladl-xxxxxxxxx
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      itemCount: 'ItemCount',
      listId: 'ListId',
      listType: 'ListType',
      name: 'Name',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      itemCount: 'number',
      listId: 'string',
      listType: 'string',
      name: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainMetasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain name lists.
   */
  domainMetas?: ListDomainMetasResponseBodyDomainMetas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D2788E14-8C9F-5FE8-B72F-5ABD033AA27E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of lists that match the specified conditions.
   * 
   * @example
   * 34
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      domainMetas: 'DomainMetas',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainMetas: { 'type': 'array', 'itemType': ListDomainMetasResponseBodyDomainMetas },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domainMetas)) {
      $dara.Model.validateArray(this.domainMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

