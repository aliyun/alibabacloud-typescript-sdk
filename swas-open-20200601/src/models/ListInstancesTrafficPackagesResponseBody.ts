// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * ccscqwqwqqqw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The data transfers that exceeds the quota of the data transfer plan in the current month. Unit: Byte.
   * 
   * @example
   * 0
   */
  trafficOverflow?: number;
  /**
   * @remarks
   * The unused quota of the data transfer plan in the current month. Unit: Byte.
   * 
   * @example
   * 10000
   */
  trafficPackageRemaining?: number;
  /**
   * @remarks
   * The quota of the data transfer plan in the current month. Unit: Byte.
   * 
   * > TrafficPackageTotal = TrafficUsed + TrafficPackageRemaining
   * 
   * @example
   * 20000
   */
  trafficPackageTotal?: number;
  /**
   * @remarks
   * The used quota of the data transfer plan in the current month. Unit: Byte.
   * 
   * @example
   * 10000
   */
  trafficUsed?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      trafficOverflow: 'TrafficOverflow',
      trafficPackageRemaining: 'TrafficPackageRemaining',
      trafficPackageTotal: 'TrafficPackageTotal',
      trafficUsed: 'TrafficUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      trafficOverflow: 'number',
      trafficPackageRemaining: 'number',
      trafficPackageTotal: 'number',
      trafficUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data transfers that exceed the quota of the data transfer plan in the current month. Unit: bytes.
   */
  instanceTrafficPackageUsages?: ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTrafficPackageUsages: 'InstanceTrafficPackageUsages',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTrafficPackageUsages: { 'type': 'array', 'itemType': ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTrafficPackageUsages)) {
      $dara.Model.validateArray(this.instanceTrafficPackageUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

