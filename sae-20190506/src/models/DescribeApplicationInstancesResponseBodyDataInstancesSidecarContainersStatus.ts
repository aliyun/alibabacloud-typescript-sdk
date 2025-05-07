// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationInstancesResponseBodyDataInstancesSidecarContainersStatus extends $dara.Model {
  containerId?: string;
  containerStatus?: string;
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

