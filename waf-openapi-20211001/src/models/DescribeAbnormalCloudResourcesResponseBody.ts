// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResources } from "./DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResources";


export class DescribeAbnormalCloudResourcesResponseBody extends $dara.Model {
  abnormalCloudResources?: DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResources[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalCloudResources: 'AbnormalCloudResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalCloudResources: { 'type': 'array', 'itemType': DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResources },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abnormalCloudResources)) {
      $dara.Model.validateArray(this.abnormalCloudResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

