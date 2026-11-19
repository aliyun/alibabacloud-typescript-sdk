// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SynchronizeAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ci-vm-rYfypJKwlN9Y
   */
  appId?: string;
  /**
   * @remarks
   * The list of target region IDs. If the list includes \\"all\\", the application is synchronized to all other unsynchronized regions by default.
   */
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

