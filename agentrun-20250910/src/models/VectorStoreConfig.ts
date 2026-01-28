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

export class VectorStoreConfigMysqlConfig extends $dara.Model {
  collectionName?: string;
  credentialName?: string;
  dbName?: string;
  host?: string;
  port?: number;
  user?: string;
  vectorDimension?: number;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'collectionName',
      credentialName: 'credentialName',
      dbName: 'dbName',
      host: 'host',
      port: 'port',
      user: 'user',
      vectorDimension: 'vectorDimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      credentialName: 'string',
      dbName: 'string',
      host: 'string',
      port: 'number',
      user: 'string',
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
  mysqlConfig?: VectorStoreConfigMysqlConfig;
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      mysqlConfig: 'mysqlConfig',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: VectorStoreConfigConfig,
      mysqlConfig: VectorStoreConfigMysqlConfig,
      provider: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.mysqlConfig && typeof (this.mysqlConfig as any).validate === 'function') {
      (this.mysqlConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

