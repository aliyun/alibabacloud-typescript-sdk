// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsResponseBodyItemsTagInfosDBInstanceIds extends $dara.Model {
  DBInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceIds: 'DBInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIds: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeTagsResponseBodyItemsTagInfos extends $dara.Model {
  DBInstanceIds?: DescribeTagsResponseBodyItemsTagInfosDBInstanceIds;
  tagKey?: string;
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

export class DescribeTagsResponseBodyItems extends $dara.Model {
  tagInfos?: DescribeTagsResponseBodyItemsTagInfos[];
  static names(): { [key: string]: string } {
    return {
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfos: { 'type': 'array', 'itemType': DescribeTagsResponseBodyItemsTagInfos },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfos)) {
      $dara.Model.validateArray(this.tagInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $dara.Model {
  items?: DescribeTagsResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeTagsResponseBodyItems,
      requestId: 'string',
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

