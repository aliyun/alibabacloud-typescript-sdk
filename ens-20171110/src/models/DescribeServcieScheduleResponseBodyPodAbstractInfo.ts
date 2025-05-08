// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses } from "./DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatuses";


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

