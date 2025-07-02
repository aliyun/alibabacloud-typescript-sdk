// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AckConfigPvcs extends $dara.Model {
  dataDiskSize?: number;
  dataDiskStorageClass?: string;
  name?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      dataDiskStorageClass: 'DataDiskStorageClass',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'number',
      dataDiskStorageClass: 'string',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

