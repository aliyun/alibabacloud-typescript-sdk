// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyApplicationsApplicationAppListApp extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * e76f8985-7965-41fc-925b-9648bb6bf650
   */
  appId?: string;
  /**
   * @remarks
   * The information about the application, such as the resource specification, parameter configuration, and resources.
   * 
   * @example
   * {
   *     "AppStatus":{
   *         "Phase":"RUNNING",
   *         "StatusDescrip":"{\\"status\\":\\"UPDATE_SUCCESS\\",\\"step\\":\\"DONE\\",\\"descrip\\":\\"update to version:1022 success\\",\\"start_time\\":\\"2022-03-01 16:18:22\\"}",
   *         "UpdateTime":"2022-03-01 16:18:22",
   *         "OrderStatus":null
   *     },
   *     "ResourceAttribute":{
   *         "NetSecurityInfo":null,
   *         "InitConfig":null,
   *         "InventoryType":"Ens",
   *         "InstanceSpec":"ens.gi6s-c12g1.large",
   *         "SystemDiskSize":100,
   *         "DataDiskSize":0,
   *         "BandwithOut":5000,
   *         "SchedulingStrategy":"Disperse",
   *         "ImageId":"m-5or73kzkuxytv7hh6wxr6yc5q",
   *         "ResourceType":"Linux",
   *         "AreaLevel":"National",
   *         "IpType":"PublicIP"
   *     },
   *     "WorkloadAttribute":[
   *         {
   *             "Name":"andorid",
   *             "Count":15,
   *             "ServiceConfig":{
   *                 "PortsBindConfig":{
   *                     "NetServiceContainer":"uravi-service",
   *                     "Ports":[
   *                         {
   *                             "Protocol":"TCP",
   *                             "BindType":"Mapping",
   *                             "StartNodePorts":"31000-31009",
   *                             "ContainerPorts":"4440-4449"
   *                         },
   *                         {
   *                             "Protocol":"TCP",
   *                             "BindType":"PassThrough",
   *                             "StartNodePorts":"59000-59000",
   *                             "ContainerPorts":"59000-59000"
   *                         },
   *                         {
   *                             "Protocol":"UDP",
   *                             "BindType":"PassThrough",
   *                             "StartNodePorts":"40001-40010",
   *                             "ContainerPorts":"40001-40010"
   *                         }
   *                     ]
   *                 },
   *                 "ServiceContainerName":"android"
   *             }
   *         },
   *         {
   *             "Name":"coturn",
   *             "Count":1,
   *             "ServiceConfig":{
   *                 "PortsBindConfig":{
   *                     "NetServiceContainer":"coturn",
   *                     "Ports":[
   *                         {
   *                             "Protocol":"TCP",
   *                             "BindType":"PassThrough",
   *                             "StartNodePorts":"3478-3478",
   *                             "ContainerPorts":"3478-3478"
   *                         },
   *                         {
   *                             "Protocol":"UDP",
   *                             "BindType":"PassThrough",
   *                             "StartNodePorts":"3478-3478",
   *                             "ContainerPorts":"3478-3478"
   *                         }
   *                     ]
   *                 },
   *                 "ServiceContainerName":"coturn"
   *             }
   *         },
   *         {
   *             "Name":"aic-manager",
   *             "Count":1,
   *             "ServiceConfig":null
   *         }
   *     ]
   * }
   */
  appInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationAppList extends $dara.Model {
  app?: ListApplicationsResponseBodyApplicationsApplicationAppListApp[];
  static names(): { [key: string]: string } {
    return {
      app: 'App',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplicationAppListApp },
    };
  }

  validate() {
    if(Array.isArray(this.app)) {
      $dara.Model.validateArray(this.app);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplication extends $dara.Model {
  /**
   * @remarks
   * Details about the application.
   */
  appList?: ListApplicationsResponseBodyApplicationsApplicationAppList;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ay-ads-hz-h
   */
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: ListApplicationsResponseBodyApplicationsApplicationAppList,
      clusterName: 'string',
    };
  }

  validate() {
    if(this.appList && typeof (this.appList as any).validate === 'function') {
      (this.appList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $dara.Model {
  application?: ListApplicationsResponseBodyApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplication },
    };
  }

  validate() {
    if(Array.isArray(this.application)) {
      $dara.Model.validateArray(this.application);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about applications.
   */
  applications?: ListApplicationsResponseBodyApplications;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50373E71-7710-4620-8AAB-133CCE49451C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: ListApplicationsResponseBodyApplications,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.applications && typeof (this.applications as any).validate === 'function') {
      (this.applications as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

