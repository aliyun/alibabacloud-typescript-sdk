// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus } from "./DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus";


export class DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSet extends $dara.Model {
  instanceCloudAssistantStatus?: DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus[];
  static names(): { [key: string]: string } {
    return {
      instanceCloudAssistantStatus: 'InstanceCloudAssistantStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCloudAssistantStatus: { 'type': 'array', 'itemType': DescribeCloudAssistantStatusResponseBodyInstanceCloudAssistantStatusSetInstanceCloudAssistantStatus },
    };
  }

  validate() {
    if(Array.isArray(this.instanceCloudAssistantStatus)) {
      $dara.Model.validateArray(this.instanceCloudAssistantStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

