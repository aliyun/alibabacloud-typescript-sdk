// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus } from "./DescribeServcieScheduleResponseBodyPodAbstractInfoContainerStatusesContainerStatus";


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

