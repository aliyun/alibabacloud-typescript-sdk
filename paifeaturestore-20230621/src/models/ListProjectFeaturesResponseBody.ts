// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectFeaturesResponseBodyFeatures } from "./ListProjectFeaturesResponseBodyFeatures";


export class ListProjectFeaturesResponseBody extends $dara.Model {
  features?: ListProjectFeaturesResponseBodyFeatures[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7D497816-607C-5B67-97B1-61354B6ACB2B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': ListProjectFeaturesResponseBodyFeatures },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

