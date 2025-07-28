// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * instance-test
   */
  aliasName?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * the test instance
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The name of the instance whose information you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * instance-test
   */
  instanceName?: string;
  /**
   * @remarks
   * (Deprecated) The network type of the instance. Valid values: NORMAL and VPC_CONSOLE. Default value: NORMAL.
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The new sources of the network from which access is allowed. By default, all sources of networks are allowed. Valid value:
   * 
   * TRUST_PROXY: the console
   */
  networkSourceACL?: string[];
  /**
   * @remarks
   * The new types of the network from which access is allowed. By default, all types of networks are allowed. Valid values:
   * 
   * *   INTERNET: the Internet
   * *   VPC: VPCs
   * *   CLASSIC: the classic network
   */
  networkTypeACL?: string[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      network: 'Network',
      networkSourceACL: 'NetworkSourceACL',
      networkTypeACL: 'NetworkTypeACL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      instanceDescription: 'string',
      instanceName: 'string',
      network: 'string',
      networkSourceACL: { 'type': 'array', 'itemType': 'string' },
      networkTypeACL: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.networkSourceACL)) {
      $dara.Model.validateArray(this.networkSourceACL);
    }
    if(Array.isArray(this.networkTypeACL)) {
      $dara.Model.validateArray(this.networkTypeACL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

