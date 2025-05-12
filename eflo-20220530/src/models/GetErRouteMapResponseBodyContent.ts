// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErRouteMapResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Policy behavior; optional values:
   * 
   * *   **permit**: Allow
   * *   **deny**: Rejected
   * 
   * @example
   * permit
   */
  action?: string;
  /**
   * @remarks
   * Policy description
   * 
   * @example
   * ssss
   */
  description?: string;
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Lingjun HUB routing policy ID
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * Lingjun HUB routing policy Name
   * 
   * @example
   * er-rmap-wulanchabu
   */
  erRouteMapName?: string;
  /**
   * @remarks
   * The time when the data address was created.
   * 
   * @example
   * 1648085472000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 1648085472000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Receive Instance ID
   * 
   * @example
   * vpd-x25vxrb2
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * Receive Instance Name
   * 
   * @example
   * vpd-receprion
   */
  receptionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the receiving instance belongs
   * 
   * @example
   * 1620939556166277
   */
  receptionInstanceOwner?: string;
  /**
   * @remarks
   * The type of the received instance. Optional values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * @example
   * VPD
   */
  receptionInstanceType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzlki4ehfse4y
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * A smaller sequence number indicates a lower priority. When a route is matched, a policy with a higher priority is preferentially matched.
   * 
   * **Valid values: 1001 to 2000**
   * 
   * @example
   * 1001
   */
  routeMapNum?: number;
  /**
   * @remarks
   * The status of the cache reserve instance. Valid values:
   * 
   * *   **Available**
   * *   **Not Available**: Unavailable
   * *   **Executing**: Executing
   * *   **Deleting**: The node is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  /**
   * @remarks
   * Release Instance ID
   * 
   * @example
   * vpd-xgkb2kl
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * Release Instance Name
   * 
   * @example
   * vpd-transimit
   */
  transmissionInstanceName?: string;
  /**
   * @remarks
   * The tenant to which the published instance belongs
   * 
   * @example
   * 1620939556166277
   */
  transmissionInstanceOwner?: string;
  /**
   * @remarks
   * Publish instance type; optional values:
   * 
   * *   **VPD**: Lingjun network segment.
   * *   **VCC**: Lingjun Connection.
   * 
   * @example
   * VPD
   */
  transmissionInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      erRouteMapName: 'ErRouteMapName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      message: 'Message',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceName: 'ReceptionInstanceName',
      receptionInstanceOwner: 'ReceptionInstanceOwner',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMapNum: 'RouteMapNum',
      status: 'Status',
      tenantId: 'TenantId',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceName: 'TransmissionInstanceName',
      transmissionInstanceOwner: 'TransmissionInstanceOwner',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      erId: 'string',
      erRouteMapId: 'string',
      erRouteMapName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      message: 'string',
      receptionInstanceId: 'string',
      receptionInstanceName: 'string',
      receptionInstanceOwner: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMapNum: 'number',
      status: 'string',
      tenantId: 'string',
      transmissionInstanceId: 'string',
      transmissionInstanceName: 'string',
      transmissionInstanceOwner: 'string',
      transmissionInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

