// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleQueryAccountForRoleGrantByPageResponseBodyAccounts extends $dara.Model {
  alias?: string;
  aliyunId?: string;
  granted?: boolean;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      aliyunId: 'AliyunId',
      granted: 'Granted',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      aliyunId: 'string',
      granted: 'boolean',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

