// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetBucketLifecycleResponseBodyRule } from "./GetBucketLifecycleResponseBodyRule";


export class GetBucketLifecycleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2583E8B-B930-4F59-ADC0-0E209A90C46E
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the rule.
   */
  rule?: GetBucketLifecycleResponseBodyRule[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: { 'type': 'array', 'itemType': GetBucketLifecycleResponseBodyRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

