// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelFeatureAvailableFeaturesResponseBodyAvaliableFeatures } from "./ListModelFeatureAvailableFeaturesResponseBodyAvaliableFeatures";


export class ListModelFeatureAvailableFeaturesResponseBody extends $dara.Model {
  avaliableFeatures?: ListModelFeatureAvailableFeaturesResponseBodyAvaliableFeatures[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * ED4DEA2F-F216-57F0-AE28-08D791233280
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avaliableFeatures: 'AvaliableFeatures',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliableFeatures: { 'type': 'array', 'itemType': ListModelFeatureAvailableFeaturesResponseBodyAvaliableFeatures },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.avaliableFeatures)) {
      $dara.Model.validateArray(this.avaliableFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

