// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourcePackageInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the expiration time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-02T13:00:00Z
   */
  expiryTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the expiration time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-02T12:00:00Z
   */
  expiryTimeStart?: string;
  /**
   * @remarks
   * Specifies whether partners are involved.
   * 
   * @example
   * true
   */
  includePartner?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
      includePartner: 'IncludePartner',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
      includePartner: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

