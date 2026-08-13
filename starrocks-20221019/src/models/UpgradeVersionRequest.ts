// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a fast restart.
   */
  fastMode?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether this upgrade is a minor version upgrade. Default value: true.
   * 
   * Valid values:
   * - true: minor version upgrade.
   * - false: major engine version upgrade.
   * 
   * @example
   * true
   */
  minor?: boolean;
  /**
   * @remarks
   * The target version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.3.2-1.77-1.6.4
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      fastMode: 'FastMode',
      instanceId: 'InstanceId',
      minor: 'Minor',
      targetVersion: 'TargetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fastMode: 'boolean',
      instanceId: 'string',
      minor: 'boolean',
      targetVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

