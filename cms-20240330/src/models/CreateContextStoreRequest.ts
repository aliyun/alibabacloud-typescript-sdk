// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextStoreRequestConfigSource extends $dara.Model {
  /**
   * @remarks
   * The name of the Log Service Logstore.
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
   * The effective start time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1751508233000
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

export class CreateContextStoreRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The metadata fields.
   */
  metadataField?: { [key: string]: string };
  /**
   * @remarks
   * The configuration source.
   */
  source?: CreateContextStoreRequestConfigSource;
  static names(): { [key: string]: string } {
    return {
      metadataField: 'metadataField',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      source: CreateContextStoreRequestConfigSource,
    };
  }

  validate() {
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

export class CreateContextStoreRequestDataset extends $dara.Model {
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

export class CreateContextStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration.
   */
  config?: CreateContextStoreRequestConfig;
  /**
   * @remarks
   * The name of the context store.
   * 
   * This parameter is required.
   * 
   * @example
   * test-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The type of the context store.
   * 
   * This parameter is required.
   * 
   * @example
   * memory
   */
  contextType?: string;
  /**
   * @remarks
   * The properties of the dataset.
   */
  dataset?: CreateContextStoreRequestDataset;
  /**
   * @remarks
   * The description of the context store.
   * 
   * @example
   * desc
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      dataset: 'dataset',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: CreateContextStoreRequestConfig,
      contextStoreName: 'string',
      contextType: 'string',
      dataset: CreateContextStoreRequestDataset,
      description: 'string',
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

