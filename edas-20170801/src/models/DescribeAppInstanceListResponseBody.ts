// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstanceListResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 93fdd228-*****-ed2ae98de18d
   */
  appId?: string;
  /**
   * @remarks
   * Indicates whether the application was released in canary release mode.
   * 
   * *   `true`: The application was released in canary release mode.
   * *   `false`: The application was not released in canary release mode
   * 
   * @example
   * false
   */
  canary?: boolean;
  /**
   * @remarks
   * The ID of the instance group to which the application is deployed.
   * 
   * @example
   * 93fdd228-*****-ed2ae98de18d
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the instance group to which the application is deployed.
   * 
   * @example
   * _DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The labels of the node. The value is a JSON string.
   * 
   * @example
   * {"alibabacloud.com/nodepool-id":"np0*5b9377fa907","beta.kubernetes.io/arch":"amd64","beta.kubernetes.io/instance-type":"ecs.*","beta.kubernetes.io/os":"linux","failure-domain.beta.kubernetes.io/region":"cn-hangzhou","failure-domain.beta.kubernetes.io/zone":"cn-hangzhou-b","kubernetes.io/arch":"amd64","kubernetes.io/hostname":"cn-hangzhou*","kubernetes.io/os":"linux","node.kubernetes.io/instance-type":"ecs.*","topology.diskplugin.csi.alibabacloud.com/zone":"cn-hangzhou-b","topology.kubernetes.io/region":"cn-hangzhou","topology.kubernetes.io/zone":"cn-hangzhou-b"}
   */
  nodeLabels?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * cn-hangzhou.192.168.0.*
   */
  nodeName?: string;
  /**
   * @remarks
   * The information about the pod. The value is a JSON string.
   * 
   * @example
   * {"metadata":{"name":"oambuild-group-1-*4xthz","generateName":"oambuild-group-*96-","namespace":"default","selfLink":"/api/v1/namespaces/default/pods/oambuild-grou*96-4xthz","uid":"7a23399c-*fe7ff4018","resourceVersion":"969614830","creationTimestamp":"2021-04-06T11:38:46Z","labels":{"ARMSApmAppId":"*","ARMSApmLicenseKey":"*"...
   */
  podRaw?: string;
  /**
   * @remarks
   * The deployment package version of the node.
   * 
   * @example
   * 2021-04-06 19:37:42
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      canary: 'Canary',
      groupId: 'GroupId',
      groupName: 'GroupName',
      nodeLabels: 'NodeLabels',
      nodeName: 'NodeName',
      podRaw: 'PodRaw',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      canary: 'boolean',
      groupId: 'string',
      groupName: 'string',
      nodeLabels: 'string',
      nodeName: 'string',
      podRaw: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The application instances.
   */
  instanceList?: DescribeAppInstanceListResponseBodyInstanceList[];
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
   * The ID of the request.
   * 
   * @example
   * 03FD1520-0FD6-436A-****-265318D7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceList: 'InstanceList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceList: { 'type': 'array', 'itemType': DescribeAppInstanceListResponseBodyInstanceList },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

