// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateApplicationRequestComponents extends $dara.Model {
  /**
   * @example
   * polar.app.g2.medium
   */
  componentClass?: string;
  /**
   * @example
   * 1
   */
  componentMaxReplica?: number;
  /**
   * @example
   * 1
   */
  componentReplica?: number;
  /**
   * @example
   * gateway
   */
  componentType?: string;
  scaleMax?: string;
  scaleMin?: string;
  /**
   * @example
   * sg-********************
   */
  securityGroups?: string;
  /**
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @example
   * ipv4
   */
  securityIPType?: string;
  static names(): { [key: string]: string } {
    return {
      componentClass: 'ComponentClass',
      componentMaxReplica: 'ComponentMaxReplica',
      componentReplica: 'ComponentReplica',
      componentType: 'ComponentType',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      securityGroups: 'SecurityGroups',
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentClass: 'string',
      componentMaxReplica: 'number',
      componentReplica: 'number',
      componentType: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      securityGroups: 'string',
      securityIPArrayName: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestEndpoints extends $dara.Model {
  /**
   * @example
   * my_endpoint
   */
  description?: string;
  /**
   * @example
   * Primary
   */
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpointType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * x86
   */
  architecture?: string;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  components?: CreateApplicationRequestComponents[];
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * myapp
   */
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  endpoints?: CreateApplicationRequestEndpoints[];
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * Year
   */
  period?: string;
  /**
   * @example
   * pcs-********************
   */
  polarFSInstanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * rg-********************
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  vpcId?: string;
  /**
   * @example
   * cn-beijing-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      architecture: 'Architecture',
      autoRenew: 'AutoRenew',
      components: 'Components',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      dryRun: 'DryRun',
      endpoints: 'Endpoints',
      payType: 'PayType',
      period: 'Period',
      polarFSInstanceId: 'PolarFSInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      architecture: 'string',
      autoRenew: 'boolean',
      components: { 'type': 'array', 'itemType': CreateApplicationRequestComponents },
      DBClusterId: 'string',
      description: 'string',
      dryRun: 'boolean',
      endpoints: { 'type': 'array', 'itemType': CreateApplicationRequestEndpoints },
      payType: 'string',
      period: 'string',
      polarFSInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      usedTime: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

