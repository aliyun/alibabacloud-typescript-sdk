// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessItem extends $dara.Model {
  bundleId?: string;
  devType?: string;
  directory?: string;
  process?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      devType: 'DevType',
      directory: 'Directory',
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      devType: 'string',
      directory: 'string',
      process: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

