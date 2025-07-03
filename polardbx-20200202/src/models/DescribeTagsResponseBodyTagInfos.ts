// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsResponseBodyTagInfos extends $dara.Model {
  DBInstanceIds?: string[];
  /**
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @example
   * testValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIds: 'DBInstanceIds',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIds: { 'type': 'array', 'itemType': 'string' },
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceIds)) {
      $dara.Model.validateArray(this.DBInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

