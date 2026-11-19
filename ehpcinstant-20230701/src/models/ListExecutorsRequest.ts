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
   * The executor image.
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
   * The job name. Fuzzy match is supported.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @remarks
   * The job template ID.
   * 
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  /**
   * @remarks
   * The resource pool name.
   * 
   * @example
   * MyPool
   */
  poolName?: string;
  /**
   * @remarks
   * The list of executor statuses.
   */
  status?: string[];
  /**
   * @remarks
   * The time after which the job was submitted. The time is converted to a UNIX timestamp based on the time zone of the region. For regions in the Chinese mainland, the time zone is UTC+8.
   * 
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @remarks
   * The time before which the job was submitted. The time is converted to a UNIX timestamp based on the time zone of the region. For regions in the Chinese mainland, the time zone is UTC+8.
   * 
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
      jobTemplateId: 'JobTemplateId',
      poolName: 'PoolName',
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
      jobTemplateId: 'string',
      poolName: 'string',
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
   * The filter conditions for querying executors.
   */
  filter?: ListExecutorsRequestFilter;
  /**
   * @remarks
   * The page number. Starting value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in the paging Settings for a paged query. Default value: 50. Maximum value: 100.
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

