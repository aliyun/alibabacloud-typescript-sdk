// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDirectorySsoStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The AD directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-h95efs1mbukd9****
   */
  directoryId?: string;
  /**
   * @remarks
   * Specifies whether to enable SSO. Valid values:
   * 
   * *   true: enables SSO.
   * *   false: disables SSO.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSso?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      enableSso: 'EnableSso',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      enableSso: 'boolean',
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

