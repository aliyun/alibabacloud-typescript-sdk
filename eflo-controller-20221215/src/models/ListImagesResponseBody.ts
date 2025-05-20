// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListImagesResponseBodyImages } from "./ListImagesResponseBodyImages";


export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Image details
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * NextToken for the next page, include this value when requesting the next page
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0FC4A1C7-421C-5EAB-9361-4C0338EFA287
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
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
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

