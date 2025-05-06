// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateConfigRuleRequestExcludeTagsScope extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource that you want to exclude.
   * 
   * @example
   * key-2
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource that you want to exclude.
   * 
   * @example
   * value-2
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

