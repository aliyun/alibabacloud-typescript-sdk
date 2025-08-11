// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SynchronizeAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ci-vm-rYfypJKwlN9Y
   */
  appId?: string;
  targetRegionIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      targetRegionIdsShrink: 'TargetRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      targetRegionIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

