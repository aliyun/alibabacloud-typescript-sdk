// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  jobIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-source
   */
  originalAppName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-00ed7f0d742b1
   */
  originalClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-target
   */
  targetAppName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-008bfb1541111
   */
  targetClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      jobIdsShrink: 'JobIds',
      originalAppName: 'OriginalAppName',
      originalClusterId: 'OriginalClusterId',
      targetAppName: 'TargetAppName',
      targetClusterId: 'TargetClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIdsShrink: 'string',
      originalAppName: 'string',
      originalClusterId: 'string',
      targetAppName: 'string',
      targetClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

