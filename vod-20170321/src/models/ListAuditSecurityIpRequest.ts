// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditSecurityIpRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the review security group in which you want to query IP addresses. If you do not specify this parameter, IP addresses in all review security groups are queried.
   * 
   * @example
   * Default
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

