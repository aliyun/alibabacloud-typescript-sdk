// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRegionalInstanceConfigResponseBodyResultMasterDiskListSubClassificationConfines } from "./GetRegionalInstanceConfigResponseBodyResultMasterDiskListSubClassificationConfines";


export class GetRegionalInstanceConfigResponseBodyResultMasterDiskList extends $dara.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  subClassificationConfines?: GetRegionalInstanceConfigResponseBodyResultMasterDiskListSubClassificationConfines[];
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      subClassificationConfines: 'subClassificationConfines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      subClassificationConfines: { 'type': 'array', 'itemType': GetRegionalInstanceConfigResponseBodyResultMasterDiskListSubClassificationConfines },
    };
  }

  validate() {
    if(Array.isArray(this.subClassificationConfines)) {
      $dara.Model.validateArray(this.subClassificationConfines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

