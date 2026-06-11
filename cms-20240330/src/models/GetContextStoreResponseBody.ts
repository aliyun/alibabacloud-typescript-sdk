// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextStoreResponseBodyConfigInnerSource extends $dara.Model {
  /**
   * @remarks
   * The name of the Log Service logstore.
   * 
   * @example
   * sls-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * sls-test-project
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfigSource extends $dara.Model {
  /**
   * @remarks
   * The name of the Log Service logstore.
   * 
   * @example
   * sls-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * sls-test-project
   */
  project?: string;
  /**
   * @remarks
   * The time when the configuration takes effect. This value is a Unix timestamp in milliseconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1754962200000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The internal source.
   */
  innerSource?: GetContextStoreResponseBodyConfigInnerSource;
  /**
   * @remarks
   * The metadata fields.
   */
  metadataField?: { [key: string]: string };
  /**
   * @remarks
   * The configuration source.
   */
  source?: GetContextStoreResponseBodyConfigSource;
  static names(): { [key: string]: string } {
    return {
      innerSource: 'innerSource',
      metadataField: 'metadataField',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      innerSource: GetContextStoreResponseBodyConfigInnerSource,
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      source: GetContextStoreResponseBodyConfigSource,
    };
  }

  validate() {
    if(this.innerSource && typeof (this.innerSource as any).validate === 'function') {
      (this.innerSource as any).validate();
    }
    if(this.metadataField) {
      $dara.Model.validateMap(this.metadataField);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * test_dataset
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the context store.
   */
  config?: GetContextStoreResponseBodyConfig;
  /**
   * @remarks
   * The context store name.
   * 
   * @example
   * test-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The type of the context store.
   * 
   * @example
   * memory
   */
  contextType?: string;
  /**
   * @remarks
   * The creation time of the context store. This value is a Unix timestamp in seconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1695090077
   */
  createTime?: string;
  /**
   * @remarks
   * Information about the associated dataset.
   */
  dataset?: GetContextStoreResponseBodyDataset;
  /**
   * @remarks
   * The description of the context store.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the context store.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The last update time of the context store. This value is a Unix timestamp in seconds.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1695090077
   */
  updateTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      createTime: 'createTime',
      dataset: 'dataset',
      description: 'description',
      regionId: 'regionId',
      requestId: 'requestId',
      status: 'status',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetContextStoreResponseBodyConfig,
      contextStoreName: 'string',
      contextType: 'string',
      createTime: 'string',
      dataset: GetContextStoreResponseBodyDataset,
      description: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

