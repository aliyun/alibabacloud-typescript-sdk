// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveVpcAccessResponseBodyApisApi } from "./RemoveVpcAccessResponseBodyApisApi";


export class RemoveVpcAccessResponseBodyApis extends $dara.Model {
  api?: RemoveVpcAccessResponseBodyApisApi[];
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: { 'type': 'array', 'itemType': RemoveVpcAccessResponseBodyApisApi },
    };
  }

  validate() {
    if(Array.isArray(this.api)) {
      $dara.Model.validateArray(this.api);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

