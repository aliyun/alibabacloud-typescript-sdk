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

export class DescribeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * requestid
   */
  requestId?: string;
  tagInfos?: DescribeTagsResponseBodyTagInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagInfos: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTagInfos },
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

