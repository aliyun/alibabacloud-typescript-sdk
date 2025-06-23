// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebInstanceRelationsResponseBodyWebInstanceRelations } from "./DescribeWebInstanceRelationsResponseBodyWebInstanceRelations";


export class DescribeWebInstanceRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0222382B-5FE5-4FF7-BC9B-97EE31D58818
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the instances to which a website service is added.
   */
  webInstanceRelations?: DescribeWebInstanceRelationsResponseBodyWebInstanceRelations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webInstanceRelations: 'WebInstanceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webInstanceRelations: { 'type': 'array', 'itemType': DescribeWebInstanceRelationsResponseBodyWebInstanceRelations },
    };
  }

  validate() {
    if(Array.isArray(this.webInstanceRelations)) {
      $dara.Model.validateArray(this.webInstanceRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

