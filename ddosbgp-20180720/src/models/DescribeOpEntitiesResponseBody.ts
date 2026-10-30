// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpEntitiesResponseBodyOpEntities extends $dara.Model {
  /**
   * @remarks
   * The operation object, which is the ID of the Anti-DDoS Origin instance.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  entityObject?: string;
  /**
   * @remarks
   * The object type of the operation. The value is fixed as **1**, which indicates an Anti-DDoS Origin instance.
   * 
   * @example
   * 1
   */
  entityType?: number;
  /**
   * @remarks
   * The time when the log was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1635818114000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID used to execute the operation.
   * 
   * > If the value is **system**, the Anti-DDoS Origin service will automatically execute the operation.
   * 
   * @example
   * 171986973287****
   */
  opAccount?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **3**: add protected IP addresses to the Anti-DDoS Origin instance
   * - **4**: unbind protected IP addresses from the Anti-DDoS Origin instance
   * - **5**: downgrade the Anti-DDoS Origin instance
   * - **6**: deactivate blackhole filtering
   * - **7**: reset the quota on blackhole filtering deactivation
   * - **8**: resume burstable protection
   * 
   * @example
   * 8
   */
  opAction?: number;
  /**
   * @remarks
   * The operation details. Use a JSON struct to transform the data into a character string representation. The JSON structure contains the following fields:
   * 
   * - **entity**: Object | The operation object. The fields contained in **entity** vary based on the operation type (**OpAction**). Details:
   * 
   *     - If **OpAction** is **3** (add protected IP addresses), **entity** contains the following fields:
   *         - **ips**: Array | The list of assets that are assigned public IP addresses that are attached to the Anti-DDoS Origin instance for protection.
   * 
   *     - If **OpAction** is **4** (unbind protected IP addresses), **entity** contains the following fields:
   *         - **ips**: Array | The list of assets that are assigned public IP addresses that are unbound from the Anti-DDoS Origin instance.
   * 
   *     - If **OpAction** is **5** (decrease the quota of the instance), **entity** contains the following fields:
   *         - **baseBandwidth**: Integer | The basic protection bandwidth. Unit: Gbit/s.
   *         - **elasticBandwidth**: Integer | The burstable protection bandwidth. Unit: Gbit/s.
   *         - **opSource**: Integer | The source of the operation. The value is fixed as **1**, which indicates that the Anti-DDoS Origin service will automatically execute the operation.
   * 
   *     - If **OpAction** is **6** (deactivate blackhole filtering), **entity** contains the following fields:
   *         - **ips**: Array | The list of assets that are assigned public IP addresses for which the blackhole filtering status is deactivated.
   * 
   *     - If **OpAction** is **7** (Reset quota on blackhole filtering deactivation), **entity** is empty.
   * 
   *     - If **OpAction** is **8** (recover burstable protection), **entity** contains the following fields:
   *         - **baseBandwidth**: Integer | The basic protection bandwidth. Unit: Gbit/s.
   *         - **elasticBandwidth**: Integer | The burstable protection bandwidth. Unit: Gbit/s.
   * 
   * @example
   * {"entity":{"baseBandwidth":20,"elasticBandwidth":20}}
   */
  opDesc?: string;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Operation logs details.
   */
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 52C8ECB0-0B1A-4E66-A31C-B6A855120E82
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried operation logs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      opEntities: 'OpEntities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.opEntities)) {
      $dara.Model.validateArray(this.opEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

