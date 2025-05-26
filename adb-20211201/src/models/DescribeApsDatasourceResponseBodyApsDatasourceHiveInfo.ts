// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsDatasourceResponseBodyApsDatasourceHiveInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-MapReduce (EMR) cluster.
   * 
   * @example
   * -
   */
  emrClusterId?: string;
  /**
   * @remarks
   * The URL of the Hive Metastore.
   * 
   * @example
   * -
   */
  metaStoreUri?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-******
   */
  securityGroup?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-******
   */
  vswitch?: string;
  static names(): { [key: string]: string } {
    return {
      emrClusterId: 'EmrClusterId',
      metaStoreUri: 'MetaStoreUri',
      securityGroup: 'SecurityGroup',
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrClusterId: 'string',
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

