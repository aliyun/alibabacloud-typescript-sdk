// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDirectorySsoStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AD office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-h95efs1mbukd9****
   */
  directoryId?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable single sign-on (SSO). Valid values:
   * - true: enables SSO
   * - false: disables SSO.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSso?: boolean;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
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

