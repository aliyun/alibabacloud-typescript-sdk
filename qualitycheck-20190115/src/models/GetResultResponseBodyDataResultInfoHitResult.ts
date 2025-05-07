// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoHitResultHitResult } from "./GetResultResponseBodyDataResultInfoHitResultHitResult";


export class GetResultResponseBodyDataResultInfoHitResult extends $dara.Model {
  hitResult?: GetResultResponseBodyDataResultInfoHitResultHitResult[];
  static names(): { [key: string]: string } {
    return {
      hitResult: 'HitResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitResult: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResult },
    };
  }

  validate() {
    if(Array.isArray(this.hitResult)) {
      $dara.Model.validateArray(this.hitResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

