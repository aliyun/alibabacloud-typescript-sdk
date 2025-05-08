// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistApplicationDataResponseBodyDistResultsDistResult } from "./DistApplicationDataResponseBodyDistResultsDistResult";


export class DistApplicationDataResponseBodyDistResults extends $dara.Model {
  distResult?: DistApplicationDataResponseBodyDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DistApplicationDataResponseBodyDistResultsDistResult },
    };
  }

  validate() {
    if(Array.isArray(this.distResult)) {
      $dara.Model.validateArray(this.distResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

