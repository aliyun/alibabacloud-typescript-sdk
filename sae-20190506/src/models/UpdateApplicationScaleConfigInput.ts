// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationScaleConfigInput extends $dara.Model {
  alwaysAllocateCPU?: boolean;
  maximumInstanceCount?: number;
  minimumInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      maximumInstanceCount: 'maximumInstanceCount',
      minimumInstanceCount: 'minimumInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      maximumInstanceCount: 'number',
      minimumInstanceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

