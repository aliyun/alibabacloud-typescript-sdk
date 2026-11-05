// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the permission group.
   * 
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The name of the permission group. The naming rules are as follows:
   * 
   * - The name must be 6 to 64 characters in length.
   * 
   * - The name must be globally unique and cannot be an empty string.
   * 
   * - The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * my-online-cluster-policy
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The description of the permission group.
   * 
   * @example
   * Dedicated policy for production cluster CIDR blocks
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessGroupName: 'AccessGroupName',
      description: 'Description',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessGroupName: 'string',
      description: 'string',
      inputRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

