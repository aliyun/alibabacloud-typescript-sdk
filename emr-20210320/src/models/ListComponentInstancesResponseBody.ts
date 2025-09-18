// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentInstancesResponseBodyComponentInstances extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * KNOX
   */
  applicationName?: string;
  /**
   * @remarks
   * The status of the component service. Valid values:
   * 
   * *   active: the primary service.
   * *   standby: the standby service.
   * 
   * @example
   * active
   */
  bizState?: string;
  /**
   * @remarks
   * The status of the Commission. Valid values:
   * 
   * *   COMMISSIONED
   * *   COMMISSIONING
   * *   DECOMMISSIONED
   * *   DECOMMISSIONINPROGRESS
   * *   DECOMMISSIONFAILED
   * *   INSERVICE
   * *   UNKNOWN
   * 
   * @example
   * INSERVICE
   */
  commissionState?: string;
  /**
   * @remarks
   * The status of the component. Valid values:
   * 
   * *   WAITING
   * *   INSTALLING
   * *   INSTALLED
   * *   INSTALL_FAILED
   * *   STARTING
   * *   STARTED
   * *   START_FAILED
   * *   STOPPING
   * *   STOPPED
   * *   STOP_FAILED
   * 
   * @example
   * STARTED
   */
  componentInstanceState?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * KNOX
   */
  componentName?: string;
  /**
   * @remarks
   * The timestamp of the installation.
   * 
   * @example
   * 1628248947000
   */
  createTime?: number;
  /**
   * @remarks
   * Valid values:
   * 
   * *   WAITING
   * *   INSTALLING
   * *   INSTALLED
   * *   INSTALL_FAILED
   * *   STARTING
   * *   STARTED
   * *   START_FAILED
   * *   STOPPING
   * *   STOPPED
   * *   STOP_FAILED
   * 
   * @example
   * STARTED
   */
  desiredState?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp17yy050pxo01m2****
   */
  nodeId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * emr-worker-1
   */
  nodeName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      bizState: 'BizState',
      commissionState: 'CommissionState',
      componentInstanceState: 'ComponentInstanceState',
      componentName: 'ComponentName',
      createTime: 'CreateTime',
      desiredState: 'DesiredState',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      bizState: 'string',
      commissionState: 'string',
      componentInstanceState: 'string',
      componentName: 'string',
      createTime: 'number',
      desiredState: 'string',
      nodeId: 'string',
      nodeName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance component installation information.
   */
  componentInstances?: ListComponentInstancesResponseBodyComponentInstances[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * “”
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7345241A-014C-17D2-A3AC-C72771188F46
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      componentInstances: 'ComponentInstances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentInstances: { 'type': 'array', 'itemType': ListComponentInstancesResponseBodyComponentInstances },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.componentInstances)) {
      $dara.Model.validateArray(this.componentInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

