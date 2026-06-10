// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationPlansForRegionRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by cluster ID.
   * 
   * @example
   * c02b3e03be10643e8a644a843ffcb****
   */
  clusterId?: string;
  /**
   * @remarks
   * Filter by execution plan status.
   * 
   * @example
   * Scheduled
   */
  state?: string;
  /**
   * @remarks
   * Filter by execution plan type.
   * 
   * @example
   * CLUSTER_UPGRADE_MASTER
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      state: 'state',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      state: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

