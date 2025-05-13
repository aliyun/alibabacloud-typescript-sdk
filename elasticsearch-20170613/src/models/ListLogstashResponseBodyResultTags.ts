// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The disk size of the node.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The instance type of the ECS instance.
   * 
   * @example
   * dev
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

