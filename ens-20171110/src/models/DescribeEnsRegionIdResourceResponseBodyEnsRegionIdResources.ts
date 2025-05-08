// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource } from "./DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource";


export class DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources extends $dara.Model {
  ensRegionIdResource?: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource[];
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResource: 'EnsRegionIdResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResource: { 'type': 'array', 'itemType': DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResourcesEnsRegionIdResource },
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIdResource)) {
      $dara.Model.validateArray(this.ensRegionIdResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

