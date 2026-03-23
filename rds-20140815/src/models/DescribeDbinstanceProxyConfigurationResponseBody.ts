// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceProxyConfigurationResponseBody extends $dara.Model {
  attacksProtectionConfiguration?: string;
  persistentConnectionsConfiguration?: string;
  requestId?: string;
  transparentSwitchConfiguration?: string;
  static names(): { [key: string]: string } {
    return {
      attacksProtectionConfiguration: 'AttacksProtectionConfiguration',
      persistentConnectionsConfiguration: 'PersistentConnectionsConfiguration',
      requestId: 'RequestId',
      transparentSwitchConfiguration: 'TransparentSwitchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attacksProtectionConfiguration: 'string',
      persistentConnectionsConfiguration: 'string',
      requestId: 'string',
      transparentSwitchConfiguration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

