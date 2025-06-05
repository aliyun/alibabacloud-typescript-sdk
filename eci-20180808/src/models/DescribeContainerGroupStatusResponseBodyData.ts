// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupStatusResponseBodyDataPodStatus } from "./DescribeContainerGroupStatusResponseBodyDataPodStatus";


export class DescribeContainerGroupStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Annotations that are added to the container groups.
   * 
   * @example
   * "{\\"tenancy.x-k8s.io/namespace\\":\\"redis\\"}"
   */
  annotations?: string;
  /**
   * @remarks
   * The ID of the container group.
   * 
   * @example
   * eci-bp1jrgfqqy54kg5hc****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The name of the container group.
   * 
   * @example
   * nginx
   */
  name?: string;
  /**
   * @remarks
   * The namespace in which the container group resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The status of the container group.
   */
  podStatus?: DescribeContainerGroupStatusResponseBodyDataPodStatus;
  /**
   * @remarks
   * The status of the container group.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The universally unique identifier (UUID) of the container group, which is similar to the unique identifier (UID) of the Kubernetes pod in terms of the concept and usage.
   * 
   * @example
   * 78ee0657-987g-b8b2-1f507dic4****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      containerGroupId: 'ContainerGroupId',
      name: 'Name',
      namespace: 'Namespace',
      podStatus: 'PodStatus',
      status: 'Status',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      containerGroupId: 'string',
      name: 'string',
      namespace: 'string',
      podStatus: DescribeContainerGroupStatusResponseBodyDataPodStatus,
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.podStatus && typeof (this.podStatus as any).validate === 'function') {
      (this.podStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

