// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDefenseResourcesResponseBodyResources } from "./DescribeDefenseResourcesResponseBodyResources";


export class DescribeDefenseResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 618F2626-DB27-5187-8C6C-4E61A491DF29
   */
  requestId?: string;
  /**
   * @remarks
   * The protected objects.
   */
  resources?: DescribeDefenseResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 73
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeDefenseResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

