// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeInstancesInPageRequest extends $dara.Model {
  currentPage?: number;
  instanceId?: string;
  instanceIds?: string[];
  orderId?: string;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      pageSize: 'number',
      regionId: 'string',
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

