// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeResourcePackageRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the resource plan takes effect. If you leave this parameter empty, the resource plan immediately takes effect by default.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-02T12:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * OSSBAG-cn-0xl*****x002
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The specifications to which you want to upgrade the resource plan.
   * 
   * @example
   * 51200
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveDate: 'string',
      instanceId: 'string',
      ownerId: 'number',
      specification: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

