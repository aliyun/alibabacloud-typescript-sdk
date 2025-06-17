// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel } from "./DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel";


export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels extends $dara.Model {
  sourceModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel[];
  static names(): { [key: string]: string } {
    return {
      sourceModel: 'SourceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceModel: { 'type': 'array', 'itemType': DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel },
    };
  }

  validate() {
    if(Array.isArray(this.sourceModel)) {
      $dara.Model.validateArray(this.sourceModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

