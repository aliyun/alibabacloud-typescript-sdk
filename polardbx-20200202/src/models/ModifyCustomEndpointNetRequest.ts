// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomEndpointNetRequest extends $dara.Model {
  /**
   * @example
   * pxc-****
   */
  connPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cep-002
   */
  customEndpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @example
   * 3306
   */
  port?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
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

