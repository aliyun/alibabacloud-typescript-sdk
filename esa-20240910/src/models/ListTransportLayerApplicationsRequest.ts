// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsRequest extends $dara.Model {
  /**
   * @example
   * fuzzy
   */
  matchType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @example
   * www.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456******
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordName: 'RecordName',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recordName: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

