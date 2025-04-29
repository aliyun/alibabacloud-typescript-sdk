// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApiResponseBodyResultDescriptionsResultDescription } from "./DescribeDeployedApiResponseBodyResultDescriptionsResultDescription";


export class DescribeDeployedApiResponseBodyResultDescriptions extends $dara.Model {
  resultDescription?: DescribeDeployedApiResponseBodyResultDescriptionsResultDescription[];
  static names(): { [key: string]: string } {
    return {
      resultDescription: 'ResultDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultDescription: { 'type': 'array', 'itemType': DescribeDeployedApiResponseBodyResultDescriptionsResultDescription },
    };
  }

  validate() {
    if(Array.isArray(this.resultDescription)) {
      $dara.Model.validateArray(this.resultDescription);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

