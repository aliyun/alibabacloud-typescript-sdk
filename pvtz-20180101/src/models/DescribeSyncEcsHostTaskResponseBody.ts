// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSyncEcsHostTaskResponseBodyEcsRegions } from "./DescribeSyncEcsHostTaskResponseBodyEcsRegions";
import { DescribeSyncEcsHostTaskResponseBodyRegions } from "./DescribeSyncEcsHostTaskResponseBodyRegions";


export class DescribeSyncEcsHostTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The synchronized regions where the ECS instances are deployed.
   */
  ecsRegions?: DescribeSyncEcsHostTaskResponseBodyEcsRegions;
  /**
   * @remarks
   * The synchronized region IDs of the ECS instances.
   */
  regions?: DescribeSyncEcsHostTaskResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether hostname automatic synchronization is enabled. Valid values:
   * 
   * *   ON: Hostname automatic synchronization is enabled. After this feature is enabled, the system automatically reads the hostnames of the Elastic Compute Service (ECS) instances in the specified regions and updates Domain Name System (DNS) records at an interval of 1 minute.
   * *   OFF: Hostname automatic synchronization is disabled.
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the task was successful. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The zone ID. This ID uniquely identifies the zone.
   * 
   * @example
   * pvtz-test-id-2989149d628c56****
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsRegions: 'EcsRegions',
      regions: 'Regions',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsRegions: DescribeSyncEcsHostTaskResponseBodyEcsRegions,
      regions: DescribeSyncEcsHostTaskResponseBodyRegions,
      requestId: 'string',
      status: 'string',
      success: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.ecsRegions && typeof (this.ecsRegions as any).validate === 'function') {
      (this.ecsRegions as any).validate();
    }
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

