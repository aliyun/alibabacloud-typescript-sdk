// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiHistoryResponseBodyResultDescriptionsResultDescription } from "./DescribeApiHistoryResponseBodyResultDescriptionsResultDescription";


export class DescribeApiHistoryResponseBodyResultDescriptions extends $dara.Model {
  resultDescription?: DescribeApiHistoryResponseBodyResultDescriptionsResultDescription[];
  static names(): { [key: string]: string } {
    return {
      resultDescription: 'ResultDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultDescription: { 'type': 'array', 'itemType': DescribeApiHistoryResponseBodyResultDescriptionsResultDescription },
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

