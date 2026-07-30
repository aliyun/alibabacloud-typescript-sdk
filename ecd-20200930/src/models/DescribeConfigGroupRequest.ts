// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration group ID.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The list of configuration group IDs.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The configuration group name.
   * 
   * @example
   * Scheduled task configuration
   */
  name?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type used by the configuration group.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The region ID. This feature is not region-specific. Set this parameter to `cn-shanghai`.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The list of configuration group statuses.
   */
  statuses?: string[];
  /**
   * @remarks
   * The configuration group type.
   * 
   * @example
   * Timer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupIds: 'GroupIds',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      regionId: 'RegionId',
      statuses: 'Statuses',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      regionId: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

