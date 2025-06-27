// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkReachableAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 123147627844****
   */
  aliUid?: number;
  /**
   * @remarks
   * The time when the network path was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-16T07:11:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The network path ID.
   * 
   * @example
   * np-2a1332214fa346b6****
   */
  networkPathId?: string;
  /**
   * @remarks
   * The parameters of the network path.
   * 
   * @example
   * {
   *   "sourceId": "i-bp100g5pbp6kj4p9****",
   *   "sourceType": "ecs",
   *   "targetId": "i-t4n4ltwgbbomzb0g****",
   *   "targetType": "ecs"
   * }
   */
  networkPathParameter?: string;
  /**
   * @remarks
   * The ID of the task for analyzing network reachability.
   * 
   * @example
   * nra-8607514e71c1484****
   */
  networkReachableAnalysisId?: string;
  /**
   * @remarks
   * The result of network reachability analysis, which includes the network topology, error codes of network unreachability, and rules of network unreachability.
   * 
   * @example
   * {
   *   "errorCode": "",
   *   "networkAclData": {
   *     "networkAclItems": [
   *       
   *     ]
   *   },
   *   "nraId": "nra-f2c8701a36424094****",
   *   "requestId": "B931F8A0-620E-5230-B77F-3BD7F612****",
   *   "routeData": {
   *     "routeItems": [
   *       
   *     ]
   *   },
   *   "securityGroupData": {
   *     "policy": "accept",
   *     "securityGroupItems": [
   *       {
   *         "description": "default_sg_access_rule",
   *         "matchedRule": {
   *           "bizProtocol": "ALL",
   *           "creatingTime": "2022-11-10T03:24:49Z",
   *           "description": "",
   *           "destinationCidr": "",
   *           "destinationGroupId": "sg-wz980j96p8y99co5****",
   *           "direction": "egress",
   *           "policy": "Accept",
   *           "portRange": "-1/-1",
   *           "priority": "1",
   *           "sourceCidr": "",
   *           "sourceGroupId": ""
   *         },
   *         "policy": "accept",
   *         "resourceId": "eni-wz92ce4saz1jzazg****",
   *         "securityGroupId": "sg-wz980j96p8y99co5****"
   *       },
   *       {
   *         "description": "user_acl_drop_rule",
   *         "matchedRule": {
   *           "bizProtocol": "",
   *           "creatingTime": "",
   *           "description": "",
   *           "destinationCidr": "",
   *           "destinationGroupId": "",
   *           "direction": "",
   *           "policy": "",
   *           "portRange": "",
   *           "priority": "",
   *           "sourceCidr": "",
   *           "sourceGroupId": ""
   *         },
   *         "policy": "",
   *         "resourceId": "eni-wz97vry93t6z4lbd****",
   *         "securityGroupId": "sg-wz980j96p8y99co****"
   *       }
   *     ],
   *     "securityGroupReportId": "sgr-4479d23bb37241aab****"
   *   },
   *   "status": "security_group_checking_target",
   *   "topologyData": {
   *     "positive": {
   *       "linkList": [
   *         {
   *           "id": "i-wz91dk7bor557hp93zyv-->eni-wz92ce4saz1jzazg****",
   *           "source": "i-wz91dk7bor557hp9****",
   *           "target": "eni-wz92ce4saz1jzazg****"
   *         },
   *         {
   *           "id": "eni-wz92ce4saz1jzazgi13d-->vsw-wz9slpwdcppwfrnee****",
   *           "source": "eni-wz92ce4saz1jzazg****",
   *           "target": "vsw-wz9slpwdcppwfrnee****"
   *         },
   *         {
   *           "id": "vsw-wz9slpwdcppwfrneebcrp-->eni-wz97vry93t6z4lbd****",
   *           "source": "vsw-wz9slpwdcppwfrnee****",
   *           "target": "eni-wz97vry93t6z4lbd****"
   *         },
   *         {
   *           "id": "eni-wz97vry93t6z4lbdgmfi-->i-wz91dk7bor557hp9****",
   *           "source": "eni-wz97vry93t6z4lbd****",
   *           "target": "i-wz91dk7bor557hp9****"
   *         }
   *       ],
   *       "nodeList": [
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "i-wz91dk7bor557hp9****",
   *           "id": "i-wz91dk7bor557hp9****",
   *           "level": 1,
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "VM",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "trafficLogs": [
   *             
   *           ]
   *         },
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "i-wz91dk7bor557hp9****",
   *           "id": "i-wz91dk7bor557hp9****",
   *           "level": 3,
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "VM",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "trafficLogs": [
   *             
   *           ]
   *         },
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "vsw-wz9slpwdcppwfrnee****",
   *           "cidr": "192.168.0.0/24",
   *           "id": "vsw-wz9slpwdcppwfrnee****",
   *           "level": 2,
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "VSW",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "trafficLogs": [
   *             
   *           ]
   *         },
   *         {
   *           "bizInsId": "eni-wz92ce4saz1jzazg****",
   *           "id": "eni-wz92ce4saz1jzazg****",
   *           "ip": "192.168.0.33",
   *           "mac": "00:XXXX:3e:16:7c:50",
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "ENI",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "status": "InUse",
   *           "trafficLogs": [
   *             
   *           ]
   *         },
   *         {
   *           "bizInsId": "eni-wz97vry93t6z4lbd****",
   *           "id": "eni-wz97vry93t6z4lbd****",
   *           "ip": "192.168.0.34",
   *           "mac": "00:XXXX:3e:14:70:c2",
   *           "matchedRoute": {
   *             "nextHopSet": [
   *               
   *             ]
   *           },
   *           "nodeType": "ENI",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "status": "InUse",
   *           "trafficLogs": [
   *             
   *           ]
   *         }
   *       ]
   *     },
   *     "reverse": {
   *       "revLinkList": [
   *         {
   *           "id": "i-wz91dk7bor557hp93zys-->eni-wz97vry93t6z4lbd****",
   *           "source": "i-wz91dk7bor557hp9****",
   *           "target": "eni-wz97vry93t6z4lbd****"
   *         },
   *         {
   *           "id": "eni-wz97vry93t6z4lbdgmfi-->vsw-wz9slpwdcppwfrnee****",
   *           "source": "eni-wz97vry93t6z4lbd****",
   *           "target": "vsw-wz9slpwdcppwfrnee****"
   *         },
   *         {
   *           "id": "vsw-wz9slpwdcppwfrneebcrp-->eni-wz92ce4saz1jzazg****",
   *           "source": "vsw-wz9slpwdcppwfrnee****",
   *           "target": "eni-wz92ce4saz1jzazg****"
   *         },
   *         {
   *           "id": "eni-wz92ce4saz1jzazgi13d-->i-wz91dk7bor557hp9****",
   *           "source": "eni-wz92ce4saz1jzazg****",
   *           "target": "i-wz91dk7bor557hp9****"
   *         }
   *       ],
   *       "revNodeList": [
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "i-wz91dk7bor557hp9****",
   *           "id": "i-wz91dk7bor557hp9****",
   *           "level": 1,
   *           "nodeType": "VM",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           }
   *         },
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "i-wz91dk7bor557hp9****",
   *           "id": "i-wz91dk7bor557hp9****",
   *           "level": 3,
   *           "nodeType": "VM",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           }
   *         },
   *         {
   *           "aZone": "cn-shenzhen-d",
   *           "bizInsId": "vsw-wz9slpwdcppwfrnee****",
   *           "cidr": "192.168.0.0/24",
   *           "id": "vsw-wz9slpwdcppwfrnee****",
   *           "level": 2,
   *           "nodeType": "VSW",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           }
   *         },
   *         {
   *           "bizInsId": "eni-wz97vry93t6z4lbd****",
   *           "id": "eni-wz97vry93t6z4lbd****",
   *           "ip": "192.168.0.34",
   *           "mac": "00:XXXX:3e:14:70:c2",
   *           "nodeType": "ENI",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           },
   *           "status": "InUse"
   *         },
   *         {
   *           "bizInsId": "eni-wz92ce4saz1jzazg****",
   *           "id": "eni-wz92ce4saz1jzazg****",
   *           "ip": "192.168.0.33",
   *           "mac": "00:XXXX:3e:16:7c:50",
   *           "nodeType": "ENI",
   *           "regionNo": "cn-shenzhen-st3-a01",
   *           "regionNoAlias": "cn-shenzhen",
   *           "revMatchedRoute": {
   *             "revNextHopSet": [
   *               
   *             ]
   *           },
   *           "status": "InUse"
   *         }
   *       ]
   *     },
   *     "topologyReportId": "tpr-21cf60002715491b8****"
   *   }
   * }
   */
  networkReachableAnalysisResult?: string;
  /**
   * @remarks
   * The state of the task for analyzing network reachability. Valid values:
   * 
   * *   **init**: The task is in progress.
   * *   **finish**: The task is complete.
   * *   **error**: An analysis error occurred.
   * *   **timeout**: The task timed out.
   * 
   * @example
   * finish
   */
  networkReachableAnalysisStatus?: string;
  /**
   * @remarks
   * Indicates whether the network path is reachable. Valid values:
   * 
   * *   **true**: The network path is reachable.
   * *   **false**: The network path is unreachable.
   * 
   * @example
   * true
   */
  reachable?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DEE0FEAF-59AE-5CDD-AA07-626BC365D571
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      networkPathId: 'NetworkPathId',
      networkPathParameter: 'NetworkPathParameter',
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      networkReachableAnalysisResult: 'NetworkReachableAnalysisResult',
      networkReachableAnalysisStatus: 'NetworkReachableAnalysisStatus',
      reachable: 'Reachable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      createTime: 'string',
      networkPathId: 'string',
      networkPathParameter: 'string',
      networkReachableAnalysisId: 'string',
      networkReachableAnalysisResult: 'string',
      networkReachableAnalysisStatus: 'string',
      reachable: 'boolean',
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

