// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudDiskTypesResponseBodySupportResources } from "./DescribeCloudDiskTypesResponseBodySupportResources";


export class DescribeCloudDiskTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 77990CEE-B714-5702-BDE6-943F702277DD
   */
  requestId?: string;
  /**
   * @remarks
   * The specifications of resources that you can purchase.
   */
  supportResources?: DescribeCloudDiskTypesResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportResources: DescribeCloudDiskTypesResponseBodySupportResources,
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

