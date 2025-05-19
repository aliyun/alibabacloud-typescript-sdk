// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckModelFeatureFGFeatureResponseBodyFGCheckResults } from "./CheckModelFeatureFgfeatureResponseBodyFgcheckResults";


export class CheckModelFeatureFGFeatureResponseBody extends $dara.Model {
  FGCheckResults?: CheckModelFeatureFGFeatureResponseBodyFGCheckResults[];
  /**
   * @example
   * ED4DEA2F-F216-57F0-AE28-08D791233280
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      FGCheckResults: 'FGCheckResults',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FGCheckResults: { 'type': 'array', 'itemType': CheckModelFeatureFGFeatureResponseBodyFGCheckResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.FGCheckResults)) {
      $dara.Model.validateArray(this.FGCheckResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

