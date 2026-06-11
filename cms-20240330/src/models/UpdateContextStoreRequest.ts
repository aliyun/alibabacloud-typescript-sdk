// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextStoreRequestConfigSource extends $dara.Model {
  /**
   * @remarks
   * The Log Service Logstore name.
   * 
   * @example
   * sls-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The Log Service Project name.
   * 
   * @example
   * sls-test-project
   */
  project?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1776824891000
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

export class UpdateContextStoreRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The metadata field.
   */
  metadataField?: { [key: string]: string };
  /**
   * @remarks
   * The data source.
   */
  source?: UpdateContextStoreRequestConfigSource;
  static names(): { [key: string]: string } {
    return {
      metadataField: 'metadataField',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      source: UpdateContextStoreRequestConfigSource,
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

export class UpdateContextStoreRequestDataset extends $dara.Model {
  /**
   * @remarks
   * The dataset name.
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

export class UpdateContextStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration.
   */
  config?: UpdateContextStoreRequestConfig;
  /**
   * @remarks
   * The context type.
   * 
   * @example
   * memory
   */
  contextType?: string;
  /**
   * @remarks
   * The dataset.
   */
  dataset?: UpdateContextStoreRequestDataset;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      contextType: 'contextType',
      dataset: 'dataset',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateContextStoreRequestConfig,
      contextType: 'string',
      dataset: UpdateContextStoreRequestDataset,
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

