// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Model } from "./Model_";


export class ListModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The models.
   */
  models?: Model[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of models.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      models: 'Models',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      models: { 'type': 'array', 'itemType': Model },
      requestId: 'string',
      totalCount: 'number',
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

