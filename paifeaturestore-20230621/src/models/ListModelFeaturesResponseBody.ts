// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelFeaturesResponseBodyModelFeatures } from "./ListModelFeaturesResponseBodyModelFeatures";


export class ListModelFeaturesResponseBody extends $dara.Model {
  modelFeatures?: ListModelFeaturesResponseBodyModelFeatures[];
  /**
   * @example
   * 2CA11923-2A3D-5E5A-8314-E699D2DD15DE
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modelFeatures: 'ModelFeatures',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeatures: { 'type': 'array', 'itemType': ListModelFeaturesResponseBodyModelFeatures },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelFeatures)) {
      $dara.Model.validateArray(this.modelFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

