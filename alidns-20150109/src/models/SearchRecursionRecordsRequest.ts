// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRecursionRecordsRequest extends $dara.Model {
  /**
   * @example
   * asc
   */
  direction?: string;
  /**
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @example
   * rr
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @example
   * default
   */
  requestSource?: string;
  /**
   * @example
   * www
   */
  rr?: string;
  /**
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @example
   * A
   */
  type?: string;
  /**
   * @example
   * 1.1.XX.XX
   */
  value?: string;
  /**
   * @example
   * 2
   */
  weight?: number;
  /**
   * @example
   * 169438909000011
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      enableStatus: 'EnableStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      requestSource: 'RequestSource',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      enableStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      requestSource: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      value: 'string',
      weight: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

