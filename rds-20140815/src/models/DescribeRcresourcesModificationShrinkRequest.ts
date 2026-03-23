// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCResourcesModificationShrinkRequest extends $dara.Model {
  conditionssShrink?: string;
  cores?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  destinationResource?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  instanceType?: string;
  memory?: number;
  /**
   * @example
   * Upgrade
   */
  operationType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      conditionssShrink: 'Conditionss',
      cores: 'Cores',
      destinationResource: 'DestinationResource',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      memory: 'Memory',
      operationType: 'OperationType',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionssShrink: 'string',
      cores: 'number',
      destinationResource: 'string',
      instanceId: 'string',
      instanceType: 'string',
      memory: 'number',
      operationType: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

