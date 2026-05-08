// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextStoreRequestConfigSource extends $dara.Model {
  /**
   * @example
   * sls-test-logstore
   */
  logstore?: string;
  /**
   * @example
   * sls-test-project
   */
  project?: string;
  /**
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
  metadataField?: { [key: string]: string };
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
  config?: UpdateContextStoreRequestConfig;
  /**
   * @example
   * memory
   */
  contextType?: string;
  dataset?: UpdateContextStoreRequestDataset;
  /**
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

