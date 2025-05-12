// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineSpecRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @deprecated
   */
  instanceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

