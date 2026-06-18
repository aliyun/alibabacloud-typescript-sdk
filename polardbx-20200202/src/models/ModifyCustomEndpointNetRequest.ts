// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomEndpointNetRequest extends $dara.Model {
  /**
   * @remarks
   * The connection prefix.
   * 
   * @example
   * pxc-****
   */
  connPrefix?: string;
  /**
   * @remarks
   * The ID of the custom endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * cep-002
   */
  customEndpointId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The public endpoint port.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the endpoint resides.
   * 
   * @example
   * vpc-bp1ndoug37dtwoedlmru0
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connPrefix: 'ConnPrefix',
      customEndpointId: 'CustomEndpointId',
      DBInstanceName: 'DBInstanceName',
      port: 'Port',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connPrefix: 'string',
      customEndpointId: 'string',
      DBInstanceName: 'string',
      port: 'number',
      regionId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

