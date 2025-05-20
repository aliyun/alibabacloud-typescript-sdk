// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LocalMountSpec extends $dara.Model {
  localPath?: string;
  mountMode?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      localPath: 'LocalPath',
      mountMode: 'MountMode',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localPath: 'string',
      mountMode: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

