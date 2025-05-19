// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs } from "./ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs";


export class ListFeatureConsistencyCheckJobConfigsResponseBody extends $dara.Model {
  featureConsistencyCheckConfigs?: ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs[];
  /**
   * @example
   * FCF741D8-9C30-578E-807F-B935487DB34A
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureConsistencyCheckConfigs: 'FeatureConsistencyCheckConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConsistencyCheckConfigs: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobConfigsResponseBodyFeatureConsistencyCheckConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureConsistencyCheckConfigs)) {
      $dara.Model.validateArray(this.featureConsistencyCheckConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

