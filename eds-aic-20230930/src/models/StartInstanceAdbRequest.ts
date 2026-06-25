// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceAdbRequest extends $dara.Model {
  /**
   * @remarks
   * A list of 1 to 100 cloud phone instance IDs.
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

