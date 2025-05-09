// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoolsRequestFilter extends $dara.Model {
  poolName?: string[];
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
      poolName: 'PoolName',
      status: 'Status',
      timeCreatedAfter: 'TimeCreatedAfter',
      timeCreatedBefore: 'TimeCreatedBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'string' },
      timeCreatedAfter: 'number',
      timeCreatedBefore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.poolName)) {
      $dara.Model.validateArray(this.poolName);
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

