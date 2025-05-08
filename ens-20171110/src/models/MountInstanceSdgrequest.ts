// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MountInstanceSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      SDGId: 'string',
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

