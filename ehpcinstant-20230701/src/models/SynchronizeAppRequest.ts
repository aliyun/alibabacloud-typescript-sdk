// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SynchronizeAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ci-vm-rYfypJKwlN9Y
   */
  appId?: string;
  targetRegionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      targetRegionIds: 'TargetRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      targetRegionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetRegionIds)) {
      $dara.Model.validateArray(this.targetRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

