// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The default domain name.
   * 
   * The default domain name is in the format of `<AccountAlias>.onaliyun.com`. `<AccountAlias>` indicates the account alias. By default, the value of AccountAlias is the ID of the Alibaba Cloud account. The default domain name must end with `.onaliyun.com`.
   * 
   * The default domain name can contain up to 64 characters in length. The default domain name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >  The default domain name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * examplecompany.onaliyun.com
   */
  defaultDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainName: 'DefaultDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

