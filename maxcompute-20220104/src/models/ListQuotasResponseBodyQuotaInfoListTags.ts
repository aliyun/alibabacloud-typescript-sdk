// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasResponseBodyQuotaInfoListTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * Department
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 1
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

