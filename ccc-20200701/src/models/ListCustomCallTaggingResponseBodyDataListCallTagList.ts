// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomCallTaggingResponseBodyDataListCallTagList extends $dara.Model {
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * TagA
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

