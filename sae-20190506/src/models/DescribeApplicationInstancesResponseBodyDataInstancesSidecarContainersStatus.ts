// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationInstancesResponseBodyDataInstancesSidecarContainersStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the sidecar container.
   * 
   * @example
   * sidecar-test-01
   */
  containerId?: string;
  /**
   * @remarks
   * The status of the container.
   * 
   * @example
   * Running
   */
  containerStatus?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * registry.cn-beijing.aliyuncs.com/sae-dev-test/******
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      containerStatus: 'ContainerStatus',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      containerStatus: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

