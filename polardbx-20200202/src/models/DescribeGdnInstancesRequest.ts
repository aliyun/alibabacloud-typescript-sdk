// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGdnInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The message filter type.
   * 
   * @example
   * gdn_id、
   * polarx_id
   */
  filterType?: string;
  /**
   * @remarks
   * The filter value for querying resources.
   * 
   * This parameter is used together with FilterKey.
   * 
   * @example
   * gdn-***、
   * pxc-***
   */
  filterValue?: string;
  /**
   * @remarks
   * The GDN ID.
   * 
   * @example
   * gdn-***
   */
  GDNId?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 50
   */
  pageNum?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filterType: 'FilterType',
      filterValue: 'FilterValue',
      GDNId: 'GDNId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterType: 'string',
      filterValue: 'string',
      GDNId: 'string',
      pageNum: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

