// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolarFsMountConfig extends $dara.Model {
  instanceId?: string;
  mountDir?: string;
  readOnly?: boolean;
  remoteDir?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      mountDir: 'mountDir',
      readOnly: 'readOnly',
      remoteDir: 'remoteDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountDir: 'string',
      readOnly: 'boolean',
      remoteDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

