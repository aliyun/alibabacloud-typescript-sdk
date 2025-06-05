// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastState } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastState";
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesState } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesState";


export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatuses extends $dara.Model {
  /**
   * @remarks
   * The image of the container.
   * 
   * @example
   * registry-vpc.cn-zhangjiakou.aliyuncs.com/eci_open/ubuntu:18.04
   */
  image?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * registry-vpc.cn-zhangjiakou.aliyuncs.com/eci_open/ubuntu@sha256:134c7fe821b9d359490cd009ce7ca322453f4f2d018623f849e580a89a685e5d
   */
  imageID?: string;
  /**
   * @remarks
   * The last status of the container.
   */
  lastState?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastState;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * ubuntu
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the container is ready.
   * 
   * @example
   * true
   */
  ready?: boolean;
  /**
   * @remarks
   * The number of times that the container restarted.
   * 
   * @example
   * 1
   */
  restartCount?: number;
  /**
   * @remarks
   * Indicates whether the container is started.
   * 
   * @example
   * true
   */
  started?: boolean;
  /**
   * @remarks
   * The status of the container. Valid values:
   * 
   * *   Waiting
   * *   Running
   * *   Terminated
   */
  state?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesState;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      imageID: 'ImageID',
      lastState: 'LastState',
      name: 'Name',
      ready: 'Ready',
      restartCount: 'RestartCount',
      started: 'Started',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      imageID: 'string',
      lastState: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastState,
      name: 'string',
      ready: 'boolean',
      restartCount: 'number',
      started: 'boolean',
      state: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesState,
    };
  }

  validate() {
    if(this.lastState && typeof (this.lastState as any).validate === 'function') {
      (this.lastState as any).validate();
    }
    if(this.state && typeof (this.state as any).validate === 'function') {
      (this.state as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

