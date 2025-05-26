// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsDatasoureRequestHiveInfo extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ******
   */
  clusterId?: string;
  /**
   * @remarks
   * The configuration of the host.
   * 
   * @example
   * ******
   */
  hostConfig?: string;
  /**
   * @remarks
   * The URL of the Hive Metastore.
   * 
   * @example
   * ******
   */
  metaStoreUri?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-uf*******h
   */
  securityGroup?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1*****k
   */
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostConfig: 'HostConfig',
      metaStoreUri: 'MetaStoreUri',
      securityGroup: 'SecurityGroup',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostConfig: 'string',
      metaStoreUri: 'string',
      securityGroup: 'string',
      vswitch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

