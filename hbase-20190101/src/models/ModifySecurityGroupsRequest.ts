// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp16f1441y6p2kv**
   */
  clusterId?: string;
  /**
   * @remarks
   * The IDs of the security groups, separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-t4ng4yyc916o81nu****,sg-x4gg4dyc9d6w********
   */
  securityGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      securityGroupIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

