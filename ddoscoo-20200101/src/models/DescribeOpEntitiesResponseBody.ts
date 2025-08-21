// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpEntitiesResponseBodyOpEntities extends $dara.Model {
  /**
   * @remarks
   * The operation object.
   * 
   * @example
   * 203.***.***.132
   */
  entityObject?: string;
  /**
   * @remarks
   * The type of the operation object. Valid values:
   * 
   * *   **1**: the IP address of the Anti-DDoS Proxy instance.
   * *   **2**: Anti-DDoS plans.
   * *   **3**: ECS instances.
   * *   **4**: all logs.
   * 
   * @example
   * 1
   */
  entityType?: number;
  /**
   * @remarks
   * The time when the operation was performed. The value is a UNIX timestamp. Units: milliseconds.
   * 
   * @example
   * 1584451769000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to perform the operation.
   * 
   * @example
   * 128965410602****
   */
  opAccount?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **1**: configuring burstable protection bandwidth.
   * *   **5**: using Anti-DDoS plans.
   * *   **8**: changing the IP addresses of ECS instances.
   * *   **9**: deactivating blackhole filtering.
   * *   **10**: configuring the near-origin traffic diversion feature.
   * *   **11**: clearing all logs.
   * *   **12**: downgrading the specifications of the Anti-DDoS Proxy instance. If the instance expires or the account has overdue payments, this operation is performed to downgrade the burstable protection bandwidth.
   * *   **13**: restoring the specifications of the Anti-DDoS Proxy instance. If the instance is renewed or you have paid the overdue payments within your account, this operation is performed to restore the burstable protection bandwidth.
   * 
   * @example
   * 9
   */
  opAction?: number;
  /**
   * @remarks
   * The details of the operation. This parameter is a JSON string. The string contains the following fields:
   * 
   * *   **newEntity**: the values of the parameters after the operation. This field is of the string type.
   * *   **oldEntity**: the values of the parameters before the operation. This field is of the string type.
   * 
   * Both **newEntity** and **oldEntity** are JSON strings. The returned parameters vary based on **OpAction**.
   * 
   * If the value of **OpAction** is **1**, **12**, or **13**, the following parameter is returned:
   * 
   * *   **elasticBandwidth**: the burstable protection bandwidth. This parameter is of the integer type. Unit: Gbit/s.
   * 
   *     Example: `{"newEntity":{"elasticBandwidth":300},"oldEntity":{"elasticBandwidth":300}}`
   * 
   * If the value of **OpAction** is **5**, the following parameters are returned:
   * 
   * *   **bandwidth**: the burstable protection bandwidth. The parameter is of the integer type. Unit: Gbit/s.
   * 
   * *   **count**: the number of Anti-DDoS plans. This parameter is of the integer type.
   * 
   * *   **deductCount**: the number of used Anti-DDoS plans. This parameter is of the integer type.
   * 
   * *   **expireTime**: the expiration time of the Anti-DDoS plans. This parameter is of the long type. The value is a UNIX timestamp. Units: milliseconds.
   * 
   * *   **instanceId**: the ID of the Anti-DDoS Proxy instance. This parameter is of the string type.
   * 
   * *   **peakFlow**: the peak throughput on the Anti-DDoS Proxy instance. This parameter is of the integer type. Unit: bit/s.
   * 
   *     Example: `{"newEntity":{"bandwidth":100,"count":4,"deductCount":1,"expireTime":1616299196000,"instanceId":"ddoscoo-cn-v641kpmq****","peakFlow":751427000}}`
   * 
   * If the value of **OpAction** is **8**, the following parameter is returned:
   * 
   * *   **instanceId**: the IDs of the ECS instances whose IP addresses are changed. This parameter is of the string type.
   * 
   *     Example: `{"newEntity":{"instanceId":"i-wz9h6nc313zptbqn****"}}`
   * 
   * If the value of **OpAction** is **9**, the following parameter is returned:
   * 
   * *   **actionMethod**: the operation method. This parameter is of the string type. Valid value: **undo**, which indicates that you deactivated blackhole filtering.
   * 
   *     Example: `{"newEntity":{"actionMethod":"undo"}}`
   * 
   * If the value of **OpAction** is **10**, the following parameters are returned:
   * 
   * *   **actionMethod**: the operation method. This parameter is of the string type. Valid values:
   * 
   *     *   **do**: The near-origin traffic diversion feature is enabled.
   *     *   **undo**: The near-origin traffic diversion feature is disabled.
   * 
   * *   **lines**: the Internet service provider (ISP) line from which the traffic is blocked. This parameter is of the array type. Valid values:
   * 
   *     *   **ct**: China Telecom (International).
   *     *   **cut**: China Unicom (International).
   * 
   *     Example: `{"newEntity":{"actionMethod":"undo","lines":["ct"]}}`
   * 
   * If the value of **OpAction** is **11**, no parameter is returned, and the description is empty.
   * 
   * @example
   * {"newEntity":{"actionMethod":"undo"}}
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
   * The operation records.
   */
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB24D70C-71F5-4000-8CD8-22CDA0C53CD1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned operation records.
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

