// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the access group. The name must meet the following requirements:
   * 
   * - The name must be 6 to 64 characters in length.
   * - The name must be globally unique and cannot be an empty string.
   * - The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * my-online-cluster-policy
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The description of the access group. The description can be up to 32 characters in length.
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
  /**
   * @remarks
   * The type of the access group. Only VPC is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      description: 'Description',
      inputRegionId: 'InputRegionId',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      description: 'string',
      inputRegionId: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

