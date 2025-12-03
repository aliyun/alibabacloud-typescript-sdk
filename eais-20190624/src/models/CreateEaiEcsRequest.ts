// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEaiEcsRequestEcs extends $dara.Model {
  /**
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthIn?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthOut?: string;
  /**
   * @example
   * test1
   */
  name?: string;
  /**
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @example
   * ecs.g7.4xlarge
   */
  type?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      password: 'Password',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      internetMaxBandwidthIn: 'string',
      internetMaxBandwidthOut: 'string',
      name: 'string',
      password: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      type: 'string',
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

export class CreateEaiEcsRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  ecs?: CreateEaiEcsRequestEcs;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiEcsRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      ecs: 'Ecs',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      ecs: CreateEaiEcsRequestEcs,
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiEcsRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.ecs && typeof (this.ecs as any).validate === 'function') {
      (this.ecs as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

