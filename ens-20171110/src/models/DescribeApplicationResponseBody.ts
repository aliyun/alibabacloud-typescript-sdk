// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned application information.
   * 
   * @example
   * {
   *     "AppMetaData":{
   *         "AppId":"b0b27670-87d5-4c40-9ea8-adeeec2986ce",
   *         "AppName":"asp-yz",
   *         "ClusterName":"poc",
   *         "AppStableVersion":"0825",
   *         "AppType":"Scheduler",
   *         "Description":"Daily testing CPU environment",
   *         "CreateTime":"2020-08-25 16:36:16"
   *     },
   *     "AppStatus":{
   *         "Phase":"RUNNING",
   *         "StatusDescrip":"{\\"status\\":\\"UPDATE_SUCCESS\\",\\"step\\":\\"DONE\\",\\"descrip\\":\\"delVersion success\\",\\"start_time\\":\\"2021-08-18 14:46:45\\"}",
   *         "UpdateTime":"2021-08-18 14:46:45"
   *     },
   *     "ResourceAttribute":{
   *         "ResourceType":"Ens",
   *         "ResourceAgent":"Linux",
   *         "InstanceSpec":"ens.sn1.large",
   *         "SystemDiskSize":40,
   *         "DataDiskSize":0,
   *         "BandwithOut":10,
   *         "SchedulingStrategy":"Disperse",
   *         "AreaLevel":"RegionId",
   *         "IpType":"PublicIP"
   *     },
   *     "WorkloadAttribute":[
   *         {
   *             "Name":"andorid",
   *             "PodCount":7,
   *             "ServiceConfig":{
   *                 "PortsBindConfig":{
   *                     "NetServiceContainer":"aspserver-android",
   *                     "Ports":[
   *                         {
   *                             "Protocol":"TCP",
   *                             "BindType":"PassThrough",
   *                             "StartNodePorts":"5000-5000",
   *                             "ContainerPorts":"5000-5000"
   *                         },
   *                         {
   *                             "Protocol":"UDP",
   *                             "BindType":"PassThrough",
   *                             "StartNodePorts":"4001-4010",
   *                             "ContainerPorts":"4001-4010"
   *                         }
   *                     ]
   *                 },
   *                 "ServiceContainerName":"android"
   *             }
   *         },
   *         {
   *             "Name":"aic-manager",
   *             "PodCount":1,
   *             "ServiceConfig":null
   *         }
   *     ],
   *     "DetailStat":{
   *         "Level":"Small",
   *         "InstanceTotalCount":1,
   *         "InstanceRunningCount":0,
   *         "PodCountStat":[
   *             {
   *                 "Name":"andorid",
   *                 "RunningCount":7,
   *                 "ProducedCount":7,
   *                 "Devices":null
   *             },
   *             {
   *                 "Name":"aic-manager",
   *                 "RunningCount":1,
   *                 "ProducedCount":1,
   *                 "Devices":null
   *             }
   *         ],
   *         "AppVersionStat":[
   *             {
   *                 "AppVersion":"08102",
   *                 "Descrip":"White Screen Test 2",
   *                 "CreateTime":"2021-08-10 11:20:04",
   *                 "InstanceTotalCount":1,
   *                 "InstanceRunningCount":0,
   *                 "PodCountStat":[
   *                     {
   *                         "Name":"andorid",
   *                         "RunningCount":7,
   *                         "ProducedCount":7,
   *                         "Devices":null
   *                     },
   *                     {
   *                         "Name":"aic-manager",
   *                         "RunningCount":1,
   *                         "ProducedCount":1,
   *                         "Devices":null
   *                     }
   *                 ],
   *                 "DistrictStat":[
   *                     {
   *                         "AreaCode":"310100",
   *                         "AreaName":"East China,,",
   *                         "RegionCode":"310100",
   *                         "RegionName":"",
   *                         "IspCode":"telecom",
   *                         "RegionIds":[
   *                             "cn-shanghai-telecom-2"
   *                         ],
   *                         "InstanceTotalCount":1,
   *                         "InstanceRunningCount":0,
   *                         "PodCountStat":[
   *                             {
   *                                 "Name":"andorid",
   *                                 "RunningCount":7,
   *                                 "ProducedCount":7,
   *                                 "Devices":null
   *                             },
   *                             {
   *                                 "Name":"aic-manager",
   *                                 "RunningCount":1,
   *                                 "ProducedCount":1,
   *                                 "Devices":null
   *                             }
   *                         ],
   *                         "InstanceStat":[
   *                             {
   *                                 "InstanceId":"i-xxxxxxx",
   *                                 "PublicIps":[
   *                                     {
   *                                         "PublicIp":"101.227.7.12",
   *                                         "Isp":"telecom"
   *                                     }
   *                                 ],
   *                                 "InternalIps":[
   *                                     {
   *                                         "Ip":"10.0.1.4"
   *                                     }
   *                                 ],
   *                                 "RegionId":"cn-shanghai-telecom-2",
   *                                 "NcName":"",
   *                                 "InstanceStatus":"",
   *                                 "CreateTime":"2020-09-12 22:33:08",
   *                                 "PodCountStat":[
   *                                     {
   *                                         "Name":"andorid",
   *                                         "RunningCount":7,
   *                                         "ProducedCount":7,
   *                                         "Devices":[
   *                                             {
   *                                                 "Name":"asp-yz-andorid-08102-zjzmcyaw-0",
   *                                                 "Status":"Running",
   *                                                 "Ports":null
   *                                             },
   *                                             {
   *                                                 "Name":"asp-yz-andorid-08102-zjzmcyaw-1",
   *                                                 "Status":"Running",
   *                                                 "Ports":null
   *                                             },
   *                                             {
   *                                                 "Name":"asp-yz-andorid-08102-zjzmcyaw-2",
   *                                                 "Status":"Running",
   *                                                 "Ports":null
   *                                             },
   *                                             {
   *                                                 "Name":"asp-yz-andorid-08102-zjzmcyaw-3",
   *                                                 "Status":"Running",
   *                                                 "Ports":null
   *                                             },
   *                                             {
   *                                                 "Name":"asp-yz-andorid-08102-zjzmcyaw-4",
   *                                                 "Status":"Running",
   *                                                 "Ports":null
   *                                             },
   *                                             {
   *                                                 "Name":"asp-yz-andorid-08102-zjzmcyaw-5",
   *                                                 "Status":"Running",
   *                                                 "Ports":null
   *                                             },
   *                                             {
   *                                                 "Name":"asp-yz-andorid-08102-zjzmcyaw-6",
   *                                                 "Status":"Running",
   *                                                 "Ports":null
   *                                             }
   *                                         ]
   *                                     },
   *                                     {
   *                                         "Name":"aic-manager",
   *                                         "RunningCount":1,
   *                                         "ProducedCount":1,
   *                                         "Devices":[
   *                                             {
   *                                                 "Name":"asp-yz-aic-manager-08102-zjzmcyaw-0",
   *                                                 "Status":"Running",
   *                                                 "Ports":null
   *                                             }
   *                                         ]
   *                                     }
   *                                 ],
   *                                 "AppVersionDescrip":""
   *                             }
   *                         ]
   *                     }
   *                 ]
   *             }
   *         ]
   *     }
   * }
   */
  application?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

