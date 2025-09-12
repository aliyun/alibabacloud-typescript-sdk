// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCrowdDatasetAndBindingDatasetRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  datasetIds?: string[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      datasetIds: 'datasetIds',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      datasetIds: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetIds)) {
      $dara.Model.validateArray(this.datasetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveCrowdDatasetAndBindingDatasetRequest extends $dara.Model {
  body?: SaveCrowdDatasetAndBindingDatasetRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SaveCrowdDatasetAndBindingDatasetRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

