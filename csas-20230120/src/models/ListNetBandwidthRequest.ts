// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * **if can be null:**
   * true
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The network type. If this parameter is left empty, both VPC and Connector instances are queried.
   * 
   * @example
   * VPC
   * 
   * **if can be null:**
   * true
   */
  netType?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceIds: 'InstanceIds',
      netType: 'NetType',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      netType: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

