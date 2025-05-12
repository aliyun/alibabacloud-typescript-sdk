// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBundlesResponseBodyBundles } from "./DescribeBundlesResponseBodyBundles";


export class DescribeBundlesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud computer templates.
   */
  bundles?: DescribeBundlesResponseBodyBundles[];
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is empty, all results have been returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lu3PTF6h3zE8egwlYuv8M8
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BCC854D8-5D1E-46D3-96EF-797A5DD36789
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bundles: 'Bundles',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundles: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundles },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bundles)) {
      $dara.Model.validateArray(this.bundles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

