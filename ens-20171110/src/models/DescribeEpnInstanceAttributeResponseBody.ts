// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEpnInstanceAttributeResponseBodyConfVersions } from "./DescribeEpnInstanceAttributeResponseBodyConfVersions";
import { DescribeEpnInstanceAttributeResponseBodyInstances } from "./DescribeEpnInstanceAttributeResponseBodyInstances";
import { DescribeEpnInstanceAttributeResponseBodyVSwitches } from "./DescribeEpnInstanceAttributeResponseBodyVswitches";


export class DescribeEpnInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the EPN configurations.
   */
  confVersions?: DescribeEpnInstanceAttributeResponseBodyConfVersions[];
  /**
   * @remarks
   * The ID of the EPN instance.
   * 
   * @example
   * epn-xxxx
   */
  EPNInstanceId?: string;
  /**
   * @remarks
   * The name of the EPN instance.
   * 
   * @example
   * epn-test
   */
  EPNInstanceName?: string;
  /**
   * @remarks
   * The information about the instance.
   */
  instances?: DescribeEpnInstanceAttributeResponseBodyInstances[];
  /**
   * @remarks
   * The networking mode. Valid values:
   * 
   * *   SpeedUp: intelligent acceleration network (Internet)
   * *   Connection: internal network
   * *   SpeedUpAndConnection: intelligent acceleration network and internal network
   * 
   * @example
   * SpeedUp
   */
  networkingModel?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the vSwitch.
   */
  vSwitches?: DescribeEpnInstanceAttributeResponseBodyVSwitches[];
  static names(): { [key: string]: string } {
    return {
      confVersions: 'ConfVersions',
      EPNInstanceId: 'EPNInstanceId',
      EPNInstanceName: 'EPNInstanceName',
      instances: 'Instances',
      networkingModel: 'NetworkingModel',
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confVersions: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyConfVersions },
      EPNInstanceId: 'string',
      EPNInstanceName: 'string',
      instances: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyInstances },
      networkingModel: 'string',
      requestId: 'string',
      vSwitches: { 'type': 'array', 'itemType': DescribeEpnInstanceAttributeResponseBodyVSwitches },
    };
  }

  validate() {
    if(Array.isArray(this.confVersions)) {
      $dara.Model.validateArray(this.confVersions);
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

