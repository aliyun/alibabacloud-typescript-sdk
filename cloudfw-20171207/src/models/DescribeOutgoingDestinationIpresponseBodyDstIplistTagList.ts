// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPResponseBodyDstIPListTagList extends $dara.Model {
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **Suspicious**
   * *   **Malicious**
   * *   **Trusted**
   * 
   * @example
   * Trusted
   */
  classId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **1**: low.
   * *   **2**: medium.
   * *   **3**: high.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * Tag that indicates traffic is allowed
   */
  tagDescribe?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * AliYun
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Tag that indicates traffic is allowed
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

