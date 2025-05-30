// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasResponseBodyDataQuotaInfoListTags extends $dara.Model {
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
   * a12351qHDP6YEQMt
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

