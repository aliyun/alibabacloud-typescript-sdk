// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration group.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The IDs of the configuration groups.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * ScheduledTask
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The service type of the configuration group.
   * 
   * Valid value:
   * 
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to `cn-shanghai`.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the configuration groups.
   */
  statuses?: string[];
  /**
   * @remarks
   * The type of the configuration group.
   * 
   * Valid value:
   * 
   * *   Timer: the scheduled task type.
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

