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

