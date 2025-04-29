// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command task.
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the command task.
   * 
   * @example
   * zhangsan
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

