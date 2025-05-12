// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListErRouteMapsRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR Block
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to enable paged query.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Elastic Router ID
   * 
   * This parameter is required.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * routing policy ID
   * 
   * @example
   * er-rmap-uwglhzom
   */
  erRouteMapId?: string;
  /**
   * @remarks
   * Policy number (default for automatic creation is 3000; The value range of the policy number manually created by the user is 1001-2000)
   * 
   * @example
   * 1001
   */
  erRouteMapNum?: number;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Receive Instance ID
   * 
   * @example
   * vpd-x2lohgpv
   */
  receptionInstanceId?: string;
  /**
   * @remarks
   * Receive Instance Name
   * 
   * @example
   * vpd2
   */
  receptionInstanceName?: string;
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
   * This parameter is required.
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
   * rg-acfmzaq3ypaqkdy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Policy behavior; optional values:
   * 
   * *   **permit**: Allow
   * *   **deny**: Rejected
   * 
   * @example
   * deny
   */
  routeMapAction?: string;
  /**
   * @remarks
   * Release Instance ID
   * 
   * @example
   * vpd-xsdlg2xb
   */
  transmissionInstanceId?: string;
  /**
   * @remarks
   * Release Instance Name
   * 
   * @example
   * vpd1
   */
  transmissionInstanceName?: string;
  /**
   * @remarks
   * The type of the published instance. Optional values:
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
      destinationCidrBlock: 'DestinationCidrBlock',
      enablePage: 'EnablePage',
      erId: 'ErId',
      erRouteMapId: 'ErRouteMapId',
      erRouteMapNum: 'ErRouteMapNum',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      receptionInstanceId: 'ReceptionInstanceId',
      receptionInstanceName: 'ReceptionInstanceName',
      receptionInstanceType: 'ReceptionInstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMapAction: 'RouteMapAction',
      transmissionInstanceId: 'TransmissionInstanceId',
      transmissionInstanceName: 'TransmissionInstanceName',
      transmissionInstanceType: 'TransmissionInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      enablePage: 'boolean',
      erId: 'string',
      erRouteMapId: 'string',
      erRouteMapNum: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      receptionInstanceId: 'string',
      receptionInstanceName: 'string',
      receptionInstanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMapAction: 'string',
      transmissionInstanceId: 'string',
      transmissionInstanceName: 'string',
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

