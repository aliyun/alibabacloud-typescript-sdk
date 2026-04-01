// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCResourcesModificationShrinkRequest extends $dara.Model {
  conditionssShrink?: string;
  /**
   * @example
   * 2
   */
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
   * 
   * @example
   * rc-pd5c*******89u25ai
   */
  instanceId?: string;
  /**
   * @example
   * mysql.x4.4xlarge.7cm
   */
  instanceType?: string;
  /**
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @example
   * Upgrade
   */
  operationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-e
   */
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

