// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyInstanceRequestMigrateAZ extends $dara.Model {
  /**
   * @remarks
   * The proxy connection address ID. You can obtain it through the DescribeDBProxyEndpoint interface.
   * 
   * > This parameter is required when MigrateAZ is selected.
   * 
   * @example
   * yhw429********
   */
  dbProxyEndpointId?: string;
  /**
   * @remarks
   * The target VSwitchId corresponding to the proxy instance migration.
   * 
   * > This parameter is required when MigrateAZ is selected.
   * 
   * @example
   * vsw-sw0qq49d1m****
   */
  destVSwitchId?: string;
  /**
   * @remarks
   * The target vpc id corresponding to the proxy instance migration.
   * 
   * @example
   * vpc-2vcicu73rdylp****
   */
  destVpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyEndpointId: 'dbProxyEndpointId',
      destVSwitchId: 'destVSwitchId',
      destVpcId: 'destVpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyEndpointId: 'string',
      destVSwitchId: 'string',
      destVpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

