// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-online-cluster-policy
   */
  accessGroupName?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
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

