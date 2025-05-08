// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedResourceResponseBodyImages } from "./DescribeReservedResourceResponseBodyImages";
import { DescribeReservedResourceResponseBodySupportResources } from "./DescribeReservedResourceResponseBodySupportResources";


export class DescribeReservedResourceResponseBody extends $dara.Model {
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
   * The information about the image.
   */
  images?: DescribeReservedResourceResponseBodyImages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6666C5A5-75ED-422E-A022-7121FA18C968
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  supportResources?: DescribeReservedResourceResponseBodySupportResources;
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
      images: DescribeReservedResourceResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeReservedResourceResponseBodySupportResources,
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

