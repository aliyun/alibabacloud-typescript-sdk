// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagesResponseBodyImages } from "./DescribeImagesResponseBodyImages";


export class DescribeImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the images.
   */
  images?: DescribeImagesResponseBodyImages[];
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4636DBE0-BBB4-4076-8B8E-94D21A9A3CFB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

