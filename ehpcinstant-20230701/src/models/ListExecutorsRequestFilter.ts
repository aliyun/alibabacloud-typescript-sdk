// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutorsRequestFilter extends $dara.Model {
  executorIds?: string[];
  ipAddresses?: string[];
  /**
   * @example
   * testJob
   */
  jobName?: string;
  status?: string[];
  /**
   * @example
   * 1703819914
   */
  timeCreatedAfter?: number;
  /**
   * @example
   * 1703820113
   */
  timeCreatedBefore?: number;
  static names(): { [key: string]: string } {
    return {
      executorIds: 'ExecutorIds',
      ipAddresses: 'IpAddresses',
      jobName: 'JobName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorIds: { 'type': 'array', 'itemType': 'string' },
      ipAddresses: { 'type': 'array', 'itemType': 'string' },
      jobName: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
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

