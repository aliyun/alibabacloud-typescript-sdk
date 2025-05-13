// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataStorageItem extends $dara.Model {
  dataType?: string;
  project?: string;
  regionId?: string;
  storeName?: string;
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'dataType',
      project: 'project',
      regionId: 'regionId',
      storeName: 'storeName',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      project: 'string',
      regionId: 'string',
      storeName: 'string',
      storeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

