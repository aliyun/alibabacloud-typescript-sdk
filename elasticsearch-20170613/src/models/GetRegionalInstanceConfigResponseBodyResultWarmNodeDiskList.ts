// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskListSubClassificationConfines } from "./GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskListSubClassificationConfines";


export class GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskList extends $dara.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  subClassificationConfines?: GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskListSubClassificationConfines[];
  valueLimitSet?: number[];
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      subClassificationConfines: 'subClassificationConfines',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      subClassificationConfines: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultWarmNodeDiskListSubClassificationConfines },
      valueLimitSet: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.subClassificationConfines)) {
      $dara.Model.validateArray(this.subClassificationConfines);
    }
    if(Array.isArray(this.valueLimitSet)) {
      $dara.Model.validateArray(this.valueLimitSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

