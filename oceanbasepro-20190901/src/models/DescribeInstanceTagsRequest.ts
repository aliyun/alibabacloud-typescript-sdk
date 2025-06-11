// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cluster IDs.
   * 
   * @example
   * ["ob3za5w73as8rk"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * [{"Key": "xxx", "Value", "xxx"},{}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

