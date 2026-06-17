// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingTagResponseBodyTagList extends $dara.Model {
  /**
   * @remarks
   * The classification. Valid values:
   * 
   * - **Suspicious**: suspicious.
   * 
   * - **Malicious**: malicious.
   * 
   * - **Trusted**: trusted.
   * 
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @remarks
   * The risk assessment level. Valid values:
   * 
   * - **0**: no threat.
   * 
   * - **1**: low threat.
   * 
   * - **2**: medium threat.
   * 
   * - **3**: high threat.
   * 
   * @example
   * 0
   */
  riskLevel?: number;
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * test describe
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * tag-6833388d18cc****
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B532203E-813B-5BEB-B75B-315E1D08****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagList?: DescribeOutgoingTagResponseBodyTagList[];
  /**
   * @remarks
   * The total number of entries.
   * 
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

