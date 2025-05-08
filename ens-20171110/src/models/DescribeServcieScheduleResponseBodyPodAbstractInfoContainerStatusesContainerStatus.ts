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

