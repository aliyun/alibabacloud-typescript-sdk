// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingTagResponseBodyTagList extends $dara.Model {
  /**
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @example
   * 0
   */
  riskLevel?: number;
  /**
   * @example
   * test describe
   */
  tagDescribe?: string;
  /**
   * @example
   * tag-6833388d18cc****
   */
  tagId?: string;
  /**
   * @example
   * test tag
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      riskLevel: 'RiskLevel',
      tagDescribe: 'TagDescribe',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      riskLevel: 'number',
      tagDescribe: 'string',
      tagId: 'string',
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

export class DescribeOutgoingTagResponseBody extends $dara.Model {
  /**
   * @example
   * B532203E-813B-5BEB-B75B-315E1D08****
   */
  requestId?: string;
  tagList?: DescribeOutgoingTagResponseBodyTagList[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagList: 'TagList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagList: { 'type': 'array', 'itemType': DescribeOutgoingTagResponseBodyTagList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

