// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstanceSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances. The value is a JSON array that consists of up to 100 IDs.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

