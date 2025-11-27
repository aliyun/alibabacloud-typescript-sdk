// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of executor IDs. A maximum of 100 IDs are supported.
   */
  executorIds?: string[];
  /**
   * @remarks
   * Executor image.
   * 
   * @example
   * m-f8z0dfa96luxxxxx
   */
  image?: string;
  /**
   * @remarks
   * The list of internal IP addresses. A maximum of 100 IP addresses are supported.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * The job name. Exact filtering. Fuzzy query is not supported.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @remarks
   * Executor status list.
   */
  status?: string[];
  /**
   * @remarks
   * For jobs submitted after this time, the time in the region is converted into a UNIX timestamp (UI8).
   * 
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @remarks
   * For jobs submitted before this time, the time in the region is converted into a Unix timestamp (for domestic sites, the UI8 region).
   * 
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-xxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      image: 'Image',
      ipAddresses: 'IpAddresses',
      jobName: 'JobName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      jobName: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(Array.isArray(this.ipAddresses)) {
      $dara.Model.validateArray(this.ipAddresses);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutorsRequest extends $dara.Model {
  /**
   * @remarks
   * Queries the Executor filter conditions.
   */
  filter?: ListExecutorsRequestFilter;
  /**
   * @remarks
   * The current page number.\\
   * Starting value: 1\\
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The number of entries returned per page. Default value: 50. Maximum value: 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: ListExecutorsRequestFilter,
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

