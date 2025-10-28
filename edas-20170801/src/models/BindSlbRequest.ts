// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EDAS application.
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-*********
   */
  appId?: string;
  /**
   * @remarks
   * The listener port for the SLB instance.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-wz96ph63r************
   */
  slbId?: string;
  /**
   * @remarks
   * The IP address of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.16*.*.*
   */
  slbIp?: string;
  /**
   * @remarks
   * The type of the SLB instance. Valid values:
   * 
   * *   internet: Internet-facing SLB instance
   * *   intranet: internal-facing SLB instance
   * 
   * This parameter is required.
   * 
   * @example
   * intranet
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vServer group for the internal-facing SLB instance.
   * 
   * @example
   * rsp-cige6******
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      listenerPort: 'ListenerPort',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      type: 'Type',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      listenerPort: 'number',
      slbId: 'string',
      slbIp: 'string',
      type: 'string',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

