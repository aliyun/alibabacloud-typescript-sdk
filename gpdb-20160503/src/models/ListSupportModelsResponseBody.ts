// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportModelsResponseBodyModelNames extends $dara.Model {
  modelNames?: string[];
  static names(): { [key: string]: string } {
    return {
      modelNames: 'modelNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.modelNames)) {
      $dara.Model.validateArray(this.modelNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportModelsResponseBody extends $dara.Model {
  modelNames?: ListSupportModelsResponseBodyModelNames;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelNames: 'ModelNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelNames: ListSupportModelsResponseBodyModelNames,
      requestId: 'string',
    };
  }

  validate() {
    if(this.modelNames && typeof (this.modelNames as any).validate === 'function') {
      (this.modelNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

