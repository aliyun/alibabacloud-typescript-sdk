// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetSupabaseProjectPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Pw123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sbp-tyarplz****
   */
  projectId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

