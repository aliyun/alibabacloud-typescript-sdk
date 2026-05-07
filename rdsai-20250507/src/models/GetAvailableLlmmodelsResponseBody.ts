// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvailableLLMModelsResponseBody extends $dara.Model {
  /**
   * @example
   * ["glm-5","deepseek-v3.2"]
   */
  models?: string[];
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      models: 'Models',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      models: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

