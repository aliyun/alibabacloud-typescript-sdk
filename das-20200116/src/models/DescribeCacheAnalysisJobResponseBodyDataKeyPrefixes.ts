// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix } from "./DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix";


export class DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes extends $dara.Model {
  prefix?: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix[];
  static names(): { [key: string]: string } {
    return {
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataKeyPrefixesPrefix },
    };
  }

  validate() {
    if(Array.isArray(this.prefix)) {
      $dara.Model.validateArray(this.prefix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

