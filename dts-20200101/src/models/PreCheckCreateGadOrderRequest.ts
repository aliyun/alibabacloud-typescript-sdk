// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckCreateGadOrderRequest extends $dara.Model {
  /**
   * @example
   * gad-bp1i99e8l7913****
   */
  instanceId?: string;
  ownerId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfntftbiobqyky
   */
  resourceGroupId?: string;
  /**
   * @example
   * rm-bp17562h64****
   */
  slaveDbInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  slaveDbInstanceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      slaveDbInstanceId: 'SlaveDbInstanceId',
      slaveDbInstanceRegion: 'SlaveDbInstanceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      slaveDbInstanceId: 'string',
      slaveDbInstanceRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

