// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo } from "./QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo";


export class QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogos extends $dara.Model {
  sourceLogo?: QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo[];
  static names(): { [key: string]: string } {
    return {
      sourceLogo: 'SourceLogo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceLogo: { 'type': 'array', 'itemType': QueryJobListResponseBodyJobListJobOutputPropertiesSourceLogosSourceLogo },
    };
  }

  validate() {
    if(Array.isArray(this.sourceLogo)) {
      $dara.Model.validateArray(this.sourceLogo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

