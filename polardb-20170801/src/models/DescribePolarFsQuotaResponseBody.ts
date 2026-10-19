// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsQuotaResponseBodyPolicyItems extends $dara.Model {
  /**
   * @remarks
   * The TTL for access time. Unit: seconds.
   * 
   * @example
   * 7200
   */
  accessTTL?: number;
  /**
   * @remarks
   * The TTL for change time. Unit: seconds.
   * 
   * @example
   * 7200
   */
  changeTTL?: number;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * NULL
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * - **true**: The new event takes effect immediately for new transactions. This is the default value.
   * - **false**: The new event does not take effect for new transactions.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The matching rule for excluding specific paths.
   * - A path pattern that starts with `/` (supports `*`, `?`, and `**` glob syntax).
   * 
   * @example
   * NULL
   */
  exclude?: string;
  /**
   * @remarks
   * The file count limit for users in the directory.
   * 
   * @example
   * 77
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 73
   */
  id?: number;
  /**
   * @remarks
   * The glob pattern for matching paths.
   * - A path pattern that starts with `/` (supports `*`, `?`, and `**` glob syntax).
   * 
   * @example
   * /a*
   */
  include?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * xxxxx
   */
  name?: string;
  /**
   * @remarks
   * The priority of the quota rule.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The total file capacity limit for the directory. Unit: GB.
   * - Note: The value must be at least 1 GB.
   * 
   * @example
   * 1
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      accessTTL: 'AccessTTL',
      changeTTL: 'ChangeTTL',
      description: 'Description',
      enabled: 'Enabled',
      exclude: 'Exclude',
      fileCountLimit: 'FileCountLimit',
      id: 'Id',
      include: 'Include',
      name: 'Name',
      priority: 'Priority',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTTL: 'number',
      changeTTL: 'number',
      description: 'string',
      enabled: 'boolean',
      exclude: 'string',
      fileCountLimit: 'number',
      id: 'number',
      include: 'string',
      name: 'string',
      priority: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsQuotaResponseBodyQuotaItems extends $dara.Model {
  /**
   * @remarks
   * The capacity. Unit: bytes.
   * 
   * @example
   * 1073741824
   */
  capacity?: number;
  /**
   * @remarks
   * Inodes
   * 
   * @example
   * 100
   */
  inodes?: number;
  /**
   * @remarks
   * The directory path.
   * 
   * @example
   * /data
   */
  path?: string;
  /**
   * @remarks
   * The used capacity. Unit: bytes.
   * 
   * @example
   * 104857600
   */
  usedCapacity?: number;
  /**
   * @remarks
   * The number of used inodes.
   * 
   * @example
   * 1
   */
  usedInodes?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      inodes: 'Inodes',
      path: 'Path',
      usedCapacity: 'UsedCapacity',
      usedInodes: 'UsedInodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      inodes: 'number',
      path: 'string',
      usedCapacity: 'number',
      usedInodes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 5
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The number of records per page. Valid values: 5 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The directory path.
   * 
   * @example
   * /data
   */
  path?: string;
  /**
   * @remarks
   * The Polarlakebase instance ID.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The rule details.
   */
  policyItems?: DescribePolarFsQuotaResponseBodyPolicyItems[];
  /**
   * @remarks
   * The quota information.
   */
  quotaItems?: DescribePolarFsQuotaResponseBodyQuotaItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      path: 'Path',
      polarFsInstanceId: 'PolarFsInstanceId',
      policyItems: 'PolicyItems',
      quotaItems: 'QuotaItems',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageRecordCount: 'string',
      pageSize: 'string',
      path: 'string',
      polarFsInstanceId: 'string',
      policyItems: { 'type': 'array', 'itemType': DescribePolarFsQuotaResponseBodyPolicyItems },
      quotaItems: { 'type': 'array', 'itemType': DescribePolarFsQuotaResponseBodyQuotaItems },
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyItems)) {
      $dara.Model.validateArray(this.policyItems);
    }
    if(Array.isArray(this.quotaItems)) {
      $dara.Model.validateArray(this.quotaItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

