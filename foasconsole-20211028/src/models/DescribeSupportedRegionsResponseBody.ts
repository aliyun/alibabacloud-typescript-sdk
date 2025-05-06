// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSupportedRegionsResponseBodyRegions } from "./DescribeSupportedRegionsResponseBodyRegions";


export class DescribeSupportedRegionsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  regions?: DescribeSupportedRegionsResponseBodyRegions[];
  /**
   * @example
   * B21DC47E-8928-199A-9F32-36D45E4693B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      regions: { 'type': 'array', 'itemType': DescribeSupportedRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

