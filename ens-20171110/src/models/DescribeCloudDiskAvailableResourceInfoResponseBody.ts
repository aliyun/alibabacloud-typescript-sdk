// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources } from "./DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources";


export class DescribeCloudDiskAvailableResourceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AE4F26E-7527-569F-A987-E3CF269A3C11
   */
  requestId?: string;
  /**
   * @remarks
   * The specifications of resources that you can purchase.
   */
  supportResources?: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportResources: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources,
    };
  }

  validate() {
    if(this.supportResources && typeof (this.supportResources as any).validate === 'function') {
      (this.supportResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

