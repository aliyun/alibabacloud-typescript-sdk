// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDomainResponseBodyDomainListTagList extends $dara.Model {
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
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * Tag indicating that the domain name is added to the whitelist
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
   * Tag indicating that the domain name is added to the whitelist
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

