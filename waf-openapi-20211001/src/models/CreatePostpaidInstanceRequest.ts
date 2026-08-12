// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostpaidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm4gh****wela
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

