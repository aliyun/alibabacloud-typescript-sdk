// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VectorStoreConfigConfig extends $dara.Model {
  collectionName?: string;
  endpoint?: string;
  instanceName?: string;
  vectorDimension?: number;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'collectionName',
      endpoint: 'endpoint',
      instanceName: 'instanceName',
      vectorDimension: 'vectorDimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      endpoint: 'string',
      instanceName: 'string',
      vectorDimension: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VectorStoreConfig extends $dara.Model {
  config?: VectorStoreConfigConfig;
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: VectorStoreConfigConfig,
      provider: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

