// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeInstancesInPageShrinkRequest extends $dara.Model {
  currentPage?: number;
  instanceId?: string;
  instanceIdsShrink?: string;
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
      instanceIdsShrink: 'InstanceIds',
      orderId: 'OrderId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      instanceIdsShrink: 'string',
      orderId: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

