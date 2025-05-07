// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationConfigResponseBodyDataSecretMountDesc extends $dara.Model {
  key?: string;
  mountPath?: string;
  secretId?: number;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      mountPath: 'MountPath',
      secretId: 'SecretId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      mountPath: 'string',
      secretId: 'number',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

