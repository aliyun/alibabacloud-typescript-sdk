// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiProductsByAppResponseBodyApiProductInfoListApiProductInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the API product.
   * 
   * @example
   * 117b7a64a8b3f064eaa4a47ac62aac5e
   */
  apiProductId?: string;
  static names(): { [key: string]: string } {
    return {
      apiProductId: 'ApiProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProductId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

