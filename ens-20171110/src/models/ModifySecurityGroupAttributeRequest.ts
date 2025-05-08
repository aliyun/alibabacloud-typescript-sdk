// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the security group.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the security group. The name of a bucket must meet the following requirements:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name must start with a letter but cannot start with http:// or https://.
   * *   The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * example
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

