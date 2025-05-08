// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityGroupAttributeResponseBodyPermissions } from "./DescribeSecurityGroupAttributeResponseBodyPermissions";


export class DescribeSecurityGroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the security group.
   * 
   * @example
   * testDescription1
   */
  description?: string;
  /**
   * @remarks
   * Details about the rules.
   */
  permissions?: DescribeSecurityGroupAttributeResponseBodyPermissions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the destination security group.
   * 
   * @example
   * sg-bp1gxw6bznjjvhu3****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the destination security group.
   * 
   * @example
   * testSecurityGroupName2
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      permissions: 'Permissions',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      permissions: DescribeSecurityGroupAttributeResponseBodyPermissions,
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    if(this.permissions && typeof (this.permissions as any).validate === 'function') {
      (this.permissions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

