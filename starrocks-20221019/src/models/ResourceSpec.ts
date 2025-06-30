// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceSpec extends $dara.Model {
  cu?: number;
  diskNumber?: number;
  localStorageInstanceType?: string;
  nodeNumber?: number;
  specType?: string;
  storagePerformanceLevel?: string;
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      nodeNumber: 'nodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      nodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

