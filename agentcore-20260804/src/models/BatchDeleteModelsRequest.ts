// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchDeleteModelsRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  modelIds?: string[];
  static names(): { [key: string]: string } {
    return {
      modelIds: 'modelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.modelIds)) {
      $dara.Model.validateArray(this.modelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteModelsRequest extends $dara.Model {
  body?: BatchDeleteModelsRequestBody;
  /**
   * @example
   * client-token-1
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: BatchDeleteModelsRequestBody,
      clientToken: 'string',
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

