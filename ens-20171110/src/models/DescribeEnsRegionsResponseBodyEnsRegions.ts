// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions } from "./DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions";


export class DescribeEnsRegionsResponseBodyEnsRegions extends $dara.Model {
  ensRegions?: DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions[];
  static names(): { [key: string]: string } {
    return {
      ensRegions: 'EnsRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegions: { 'type': 'array', 'itemType': DescribeEnsRegionsResponseBodyEnsRegionsEnsRegions },
    };
  }

  validate() {
    if(Array.isArray(this.ensRegions)) {
      $dara.Model.validateArray(this.ensRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

