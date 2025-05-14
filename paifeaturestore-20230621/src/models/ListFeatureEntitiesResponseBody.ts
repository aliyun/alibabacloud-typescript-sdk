// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureEntitiesResponseBodyFeatureEntities } from "./ListFeatureEntitiesResponseBodyFeatureEntities";


export class ListFeatureEntitiesResponseBody extends $dara.Model {
  featureEntities?: ListFeatureEntitiesResponseBodyFeatureEntities[];
  /**
   * @example
   * 37D19490-AB69-567D-A852-407C94E510E9
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureEntities: 'FeatureEntities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntities: { 'type': 'array', 'itemType': ListFeatureEntitiesResponseBodyFeatureEntities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureEntities)) {
      $dara.Model.validateArray(this.featureEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

