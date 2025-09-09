// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecursionRecordsRequest extends $dara.Model {
  /**
   * @example
   * enable
   */
  enable?: string;
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
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * remark
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
   * 1
   */
  weight?: number;
  /**
   * @example
   * 17832322323
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      requestSource: 'RequestSource',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      requestSource: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
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

