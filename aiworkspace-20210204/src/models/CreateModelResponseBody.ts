// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model-rbvg5wzljz****ks92
   */
  modelId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DAD3112-AE22-5563-9A02-5C7E8****E35
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

