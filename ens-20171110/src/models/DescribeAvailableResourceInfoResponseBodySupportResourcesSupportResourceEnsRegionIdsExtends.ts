// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId } from "./DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId";


export class DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtends extends $dara.Model {
  ensRegionId?: DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId[];
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: { 'type': 'array', 'itemType': DescribeAvailableResourceInfoResponseBodySupportResourcesSupportResourceEnsRegionIdsExtendsEnsRegionId },
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionId)) {
      $dara.Model.validateArray(this.ensRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

