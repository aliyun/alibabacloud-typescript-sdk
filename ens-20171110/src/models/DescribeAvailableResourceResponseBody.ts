// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyImages } from "./DescribeAvailableResourceResponseBodyImages";
import { DescribeAvailableResourceResponseBodySupportResources } from "./DescribeAvailableResourceResponseBodySupportResources";


export class DescribeAvailableResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The details of the images.
   */
  images?: DescribeAvailableResourceResponseBodyImages;
  /**
   * @remarks
   * The ID of the request. This is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The specifications of resources that you can purchase.
   */
  supportResources?: DescribeAvailableResourceResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeAvailableResourceResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeAvailableResourceResponseBodySupportResources,
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    if(this.supportResources && typeof (this.supportResources as any).validate === 'function') {
      (this.supportResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

