// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupClientsShrinkRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the query filter.
   * 
   * @example
   * InstanceId
   */
  key?: string;
  /**
   * @remarks
   * The values to match in the query filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the backup vault. Valid values of N: 1 to 20.
   * 
   * - The tag key cannot start with `aliyun` or `acs:`. 
   * - The tag key cannot contain `http://` or `https://`.
   * - The tag key cannot be an empty string.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the backup vault. Valid values of N: 1 to 20.
   * 
   * - The tag value cannot start with `aliyun` or `acs:`. 
   * - The tag value cannot contain `http://` or `https://`.
   * - The tag value cannot be an empty string.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backup client IDs.
   * 
   * @example
   * ["c-*********************"]
   */
  clientIdsShrink?: string;
  /**
   * @remarks
   * The type of the backup client. Valid values:
   * - **ECS_CLIENT**: ECS File Backup client.
   * - **CONTAINER_CLIENT**: container backup client.
   * - **LOCAL_CLIENT**: local NAS backup, CPFS backup, archive, or data synchronization client.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_CLIENT
   */
  clientType?: string;
  /**
   * @remarks
   * The ID of the backup cluster.
   * 
   * @example
   * cl-000ge4wa61b4d337xblq
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the RAM role created in the source account for cross-account backup.
   * 
   * @example
   * hbrcrossrole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The type of cross-account backup. Valid values: 
   * - SELF_ACCOUNT: backup within the current account. 
   * - CROSS_ACCOUNT: cross-account backup.
   * 
   * @example
   * CROSS_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source account used for cross-account backup.
   * 
   * @example
   * 129374672382xxxx
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The query filters.
   */
  filters?: DescribeBackupClientsShrinkRequestFilters[];
  /**
   * @remarks
   * The list of ECS instance IDs.
   * 
   * @example
   * ["i-*********************"]
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tag information to return.
   * 
   * @example
   * 33738719#
   */
  tag?: DescribeBackupClientsShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
      clientType: 'ClientType',
      clusterId: 'ClusterId',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      filters: 'Filters',
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
      clientType: 'string',
      clusterId: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      filters: { 'type': 'array', 'itemType': DescribeBackupClientsShrinkRequestFilters },
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': DescribeBackupClientsShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

