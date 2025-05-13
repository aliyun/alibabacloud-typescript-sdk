// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionalInstanceConfigResponseBodyResultMasterDiskListSubClassificationConfines extends $dara.Model {
  maxSize?: number;
  minSize?: number;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      maxSize: 'maxSize',
      minSize: 'minSize',
      performanceLevel: 'performanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSize: 'number',
      minSize: 'number',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

