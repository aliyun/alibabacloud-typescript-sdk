// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualResourceResponseBodyVirtualResources extends $dara.Model {
  /**
   * @remarks
   * The time when the virtual resource group was created.
   * 
   * @example
   * 2024-10-16T17:52:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of deployed services.
   * 
   * @example
   * 1
   */
  serviceCount?: number;
  /**
   * @remarks
   * The time when the virtual resource group was last updated.
   * 
   * @example
   * 2024-10-16T19:52:49Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the virtual resource group.
   * 
   * @example
   * eas-vr-npovr28onap1xxxxxx
   */
  virtualResourceId?: string;
  /**
   * @remarks
   * The name of the virtual resource group.
   * 
   * @example
   * MyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      serviceCount: 'ServiceCount',
      updateTime: 'UpdateTime',
      virtualResourceId: 'VirtualResourceId',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      serviceCount: 'number',
      updateTime: 'string',
      virtualResourceId: 'string',
      virtualResourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

