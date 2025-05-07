// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagsResponseBodyItemsTagInfosDBInstanceIds } from "./DescribeTagsResponseBodyItemsTagInfosDbinstanceIds";


export class DescribeTagsResponseBodyItemsTagInfos extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instances to which the tag is added.
   */
  DBInstanceIds?: DescribeTagsResponseBodyItemsTagInfosDBInstanceIds;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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
      DBInstanceIds: DescribeTagsResponseBodyItemsTagInfosDBInstanceIds,
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    if(this.DBInstanceIds && typeof (this.DBInstanceIds as any).validate === 'function') {
      (this.DBInstanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

