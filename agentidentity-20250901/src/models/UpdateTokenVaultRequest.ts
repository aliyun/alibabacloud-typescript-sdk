// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTokenVaultRequest extends $dara.Model {
  description?: string;
  roleArn?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      roleArn: 'RoleArn',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      roleArn: 'string',
      tokenVaultName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

