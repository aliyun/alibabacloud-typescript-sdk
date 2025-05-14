// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisplayConfigResponseBodyDisplayConfigModel } from "./DescribeDisplayConfigResponseBodyDisplayConfigModel";


export class DescribeDisplayConfigResponseBody extends $dara.Model {
  displayConfigModel?: DescribeDisplayConfigResponseBodyDisplayConfigModel[];
  /**
   * @example
   * FFEF7EFE-1E36-56D1-B5BF-5BACE43B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      displayConfigModel: 'DisplayConfigModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayConfigModel: { 'type': 'array', 'itemType': DescribeDisplayConfigResponseBodyDisplayConfigModel },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.displayConfigModel)) {
      $dara.Model.validateArray(this.displayConfigModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

