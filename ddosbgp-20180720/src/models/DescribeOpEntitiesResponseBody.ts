// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpEntitiesResponseBodyOpEntities extends $dara.Model {
  /**
   * @remarks
   * The operation object, which is the ID of the instance.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  entityObject?: string;
  /**
   * @remarks
   * The type of the operation object. The value is fixed as **1**, which indicates Anti-DDoS Origin instances.
   * 
   * @example
   * 1
   */
  entityType?: number;
  /**
   * @remarks
   * The time when the log was generated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1635818114000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that performs the operation.
   * 
   * > If the value is **system**, the operation is performed by Anti-DDoS Origin.
   * 
   * @example
   * 171986973287****
   */
  opAccount?: string;
  /**
   * @remarks
   * The type of operation. Valid values:
   * 
   * *   **3**: indicates an operation to add an IP address to the Anti-DDoS Origin instance for protection.
   * *   **4**: indicates an operation to remove a protected IP address from the Anti-DDoS Origin instance.
   * *   **5**: indicates an operation to downgrade the Anti-DDoS Origin instance.
   * *   **6**: indicates an operation to deactivate blackhole filtering for an IP address.
   * *   **7**: indicates an operation to reset the number of times that you can deactivate blackhole filtering.
   * *   **8**: indicates an operation to enable burstable protection.
   * 
   * @example
   * 8
   */
  opAction?: number;
  /**
   * @remarks
   * The details of the operation. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
   * 
   * *   **entity**: the operation object. Data type: object. The fields that are included in the value of the **entity** parameter vary based on the value of the **OpAction** parameter. Valid values:
   * 
   *     *   If the value of the **OpAction** parameter is **3**, the value of the **entity** parameter consists of the following field:
   * 
   *         *   **ips**: the public IP addresses that are protected by the Anti-DDoS Origin instance. Data type: array
   * 
   *     *   If the value of the **OpAction** parameter is **4**, the value of the **entity** parameter consists of the following field:
   * 
   *         *   **ips**: the public IP addresses that are no longer protected by the Anti-DDoS Origin instance. Data type: array.
   * 
   *     *   If the value of the **OpAction** parameter is **5**, the value of the **entity** parameter consists of the following fields:
   * 
   *         *   **baseBandwidth**: the basic protection bandwidth. Unit: Gbit/s. Data type: integer.
   *         *   **elasticBandwidth**: the burstable protection bandwidth. Unit: Gbit/s. Data type: integer.
   *         *   **opSource**: the source of the operation. The value is fixed as **1**, indicating that the operation is performed by Anti-DDoS Origin. Data type: integer.
   * 
   *     *   If the value of the **OpAction** parameter is **6**, the value of the **entity** parameter consists of the following field:
   * 
   *         *   **ips**: the public IP addresses for which to deactivate blackhole filtering. Data type: array.
   * 
   *     *   If the value of the **OpAction** parameter is **7**, the **entity** parameter is not returned.
   * 
   *     *   If the value of the **OpAction** parameter is **8**, the value of the **entity** parameter consists of the following fields:
   * 
   *         *   **baseBandwidth**: the basic protection bandwidth. Unit: Gbit/s. Data type: integer.
   *         *   **elasticBandwidth**: the burstable protection bandwidth. Unit: Gbit/s. Data type: integer.
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
   * The details of the operation log.
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
   * The total number of operation logs.
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

