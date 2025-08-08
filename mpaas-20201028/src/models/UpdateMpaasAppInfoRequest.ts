// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMpaasAppInfoRequest extends $dara.Model {
  appId?: string;
  appName?: string;
  iconFileUrl?: string;
  identifier?: string;
  onexFlag?: boolean;
  systemType?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      iconFileUrl: 'IconFileUrl',
      identifier: 'Identifier',
      onexFlag: 'OnexFlag',
      systemType: 'SystemType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      iconFileUrl: 'string',
      identifier: 'string',
      onexFlag: 'boolean',
      systemType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

