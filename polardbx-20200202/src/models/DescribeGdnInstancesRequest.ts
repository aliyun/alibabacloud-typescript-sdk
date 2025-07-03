// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGdnInstancesRequest extends $dara.Model {
  /**
   * @example
   * gdn_id、
   * polarx_id
   */
  filterType?: string;
  /**
   * @example
   * gdn-***、
   * pxc-***
   */
  filterValue?: string;
  /**
   * @remarks
   * GDN ID。
   * 
   * @example
   * gdn-***
   */
  GDNId?: string;
  /**
   * @example
   * 50
   */
  pageNum?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
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

