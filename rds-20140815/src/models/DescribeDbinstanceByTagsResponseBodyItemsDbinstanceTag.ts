// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags } from "./DescribeDbinstanceByTagsResponseBodyItemsDbinstanceTagTags";


export class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6w**********
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The details about the tag.
   */
  tags?: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      tags: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

