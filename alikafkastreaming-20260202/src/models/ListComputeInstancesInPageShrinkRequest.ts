// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeInstancesInPageShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  instanceIdsShrink?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceIdsShrink: 'InstanceIds',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceIdsShrink: 'string',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

