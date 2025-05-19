// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEngineConfigsResponseBodyEngineConfigs } from "./ListEngineConfigsResponseBodyEngineConfigs";


export class ListEngineConfigsResponseBody extends $dara.Model {
  engineConfigs?: ListEngineConfigsResponseBodyEngineConfigs[];
  /**
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      engineConfigs: 'EngineConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineConfigs: { 'type': 'array', 'itemType': ListEngineConfigsResponseBodyEngineConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.engineConfigs)) {
      $dara.Model.validateArray(this.engineConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

