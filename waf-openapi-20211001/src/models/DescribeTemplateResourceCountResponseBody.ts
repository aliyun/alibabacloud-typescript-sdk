// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTemplateResourceCountResponseBodyResourceCount } from "./DescribeTemplateResourceCountResponseBodyResourceCount";


export class DescribeTemplateResourceCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8064433-9781-5E86-806E-C1DD****1D95
   */
  requestId?: string;
  /**
   * @remarks
   * The number of protected objects or protected object groups for which the protection template takes effect.
   */
  resourceCount?: DescribeTemplateResourceCountResponseBodyResourceCount[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceCount: { 'type': 'array', 'itemType': DescribeTemplateResourceCountResponseBodyResourceCount },
    };
  }

  validate() {
    if(Array.isArray(this.resourceCount)) {
      $dara.Model.validateArray(this.resourceCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

