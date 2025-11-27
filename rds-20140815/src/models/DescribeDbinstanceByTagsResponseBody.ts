// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag extends $dara.Model {
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

export class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags extends $dara.Model {
  tag?: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeDBInstanceByTagsResponseBodyItems extends $dara.Model {
  DBInstanceTag?: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceTag: 'DBInstanceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceTag: { 'type': 'array', 'itemType': DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceTag)) {
      $dara.Model.validateArray(this.DBInstanceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceByTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the instance.
   */
  items?: DescribeDBInstanceByTagsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstanceByTagsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

