// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditSecurityIpRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the review security IP group. By default, all groups are returned.
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

