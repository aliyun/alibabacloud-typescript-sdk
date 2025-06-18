// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CacheInfo extends $dara.Model {
  mountPoint?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      mountPoint: 'MountPoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoint: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

