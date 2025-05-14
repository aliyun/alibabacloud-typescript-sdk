// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the nodes that you want to query. Separate multiple node IDs with commas (,).
   * 
   * @example
   * "i-bp11xjhwkj8k966u****,i-bp1dmhc2bu5igkyq****"
   */
  instanceIds?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The node state that you want to use to filter nodes. Valid values:
   * 
   * *   `all`: query nodes in the following four states.
   * *   `running`: query nodes in the running state.
   * *   `removing`: query nodes that are being removed.
   * *   `initial`: query nodes that are being initialized.
   * *   `failed`: query nodes that fail to be created.
   * 
   * Default value: `all`.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      nodepoolId: 'nodepool_id',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      nodepoolId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

