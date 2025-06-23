// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagResourcesResponseBodyTagResources } from "./DescribeTagResourcesResponseBodyTagResources";


export class DescribeTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token that is returned in this call.
   * 
   * @example
   * RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36E698F7-48A4-48D0-9554-0BB4BAAB99B3
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that are added to the Anti-DDoS Proxy (Chinese Mainland) instance.
   */
  tagResources?: DescribeTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: DescribeTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

