// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * container_e79_1638372147094_158091_02_000001
   */
  containerId?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * nginx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses extends $dara.Model {
  containerStatus?: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus[];
  static names(): { [key: string]: string } {
    return {
      containerStatus: 'ContainerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerStatus: { 'type': 'array', 'itemType': DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus },
    };
  }

  validate() {
    if(Array.isArray(this.containerStatus)) {
      $dara.Model.validateArray(this.containerStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBodyPodAbstractInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the container service.
   * 
   * @example
   * android
   */
  containerService?: boolean;
  /**
   * @remarks
   * The information about the container.
   */
  containerStatuses?: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * gcs-prod-websocket-eip-telecom
   */
  name?: boolean;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * default-aliyun
   */
  namespace?: boolean;
  /**
   * @remarks
   * The pod scope.
   * 
   * @example
   * FDN
   */
  resourceScope?: boolean;
  /**
   * @remarks
   * The status of the pod.
   * 
   * @example
   * RUNNING
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      containerService: 'ContainerService',
      containerStatuses: 'ContainerStatuses',
      name: 'Name',
      namespace: 'Namespace',
      resourceScope: 'ResourceScope',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerService: 'boolean',
      containerStatuses: DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses,
      name: 'boolean',
      namespace: 'boolean',
      resourceScope: 'boolean',
      status: 'boolean',
    };
  }

  validate() {
    if(this.containerStatuses && typeof (this.containerStatuses as any).validate === 'function') {
      (this.containerStatuses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServcieScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The index number of the scheduled virtual device (pod).
   * 
   * @example
   * 2
   */
  index?: number;
  /**
   * @remarks
   * The ID of the scheduled instance.
   * 
   * @example
   * i-5myukg7hnpbto7m024002****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the scheduled instance.
   * 
   * @example
   * 120.26.XX.XX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The start port of the scheduled instance.
   * 
   * @example
   * 3306
   */
  instancePort?: number;
  /**
   * @remarks
   * The summary information about the scheduled virtual device.
   */
  podAbstractInfo?: DescribeServcieScheduleResponseBodyPodAbstractInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is repeated.
   * 
   * @example
   * false
   */
  requestRepeated?: boolean;
  /**
   * @remarks
   * The TCP port range of the scheduled instance or container. The value is in the ${from}-$-{to} format. Example: 80-88.
   * 
   * @example
   * 80-88
   */
  tcpPorts?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instancePort: 'InstancePort',
      podAbstractInfo: 'PodAbstractInfo',
      requestId: 'RequestId',
      requestRepeated: 'RequestRepeated',
      tcpPorts: 'TcpPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instancePort: 'number',
      podAbstractInfo: DescribeServcieScheduleResponseBodyPodAbstractInfo,
      requestId: 'string',
      requestRepeated: 'boolean',
      tcpPorts: 'string',
    };
  }

  validate() {
    if(this.podAbstractInfo && typeof (this.podAbstractInfo as any).validate === 'function') {
      (this.podAbstractInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

