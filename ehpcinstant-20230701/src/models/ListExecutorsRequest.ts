// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * A list of executor IDs. You can specify up to 100 IDs.
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
   * A list of private IP addresses. You can specify up to 100 IP addresses.
   */
  ipAddresses?: string[];
  /**
   * @remarks
   * The job name. Fuzzy queries are supported.
   * 
   * @example
   * testJob
   */
  jobName?: string;
  /**
   * @example
   * jt-xxxx
   */
  jobTemplateId?: string;
  /**
   * @example
   * MyPool
   */
  poolName?: string;
  /**
   * @remarks
   * A list of executor statuses.
   */
  status?: string[];
  /**
   * @remarks
   * The jobs submitted after this time. This is a UNIX timestamp that is converted from the time in the region where the job is located. For sites in mainland China, the time is in the UTC+8 time zone.
   * 
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @remarks
   * The jobs submitted before this time. This is a UNIX timestamp that is converted from the time in the region where the job is located. For sites in mainland China, the time is in the UTC+8 time zone.
   * 
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
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
   * The current page number.<br>Start value: 1<br>Default value: 1<br><br>
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Default value: 50. Maximum value: 100.
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

