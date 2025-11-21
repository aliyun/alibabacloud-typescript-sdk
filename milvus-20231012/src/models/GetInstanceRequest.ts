// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-xxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

