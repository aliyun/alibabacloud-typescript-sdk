// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList extends $dara.Model {
  /**
   * @remarks
   * The match content.
   * 
   * @example
   * 1.1.1.1
   */
  content?: string;
  contentList?: string[];
  /**
   * @remarks
   * The match field.
   * 
   * @example
   * ip
   */
  field?: string;
  /**
   * @remarks
   * The custom HTTP request header.
   * 
   * >  This parameter takes effect only when **Field** is set to **header**.
   * 
   * @example
   * null
   */
  headerName?: string;
  /**
   * @remarks
   * The logical operator.
   * 
   * @example
   * belong
   */
  matchMethod?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentList: 'ContentList',
      field: 'Field',
      headerName: 'HeaderName',
      matchMethod: 'MatchMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentList: { 'type': 'array', 'itemType': 'string' },
      field: 'string',
      headerName: 'string',
      matchMethod: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentList)) {
      $dara.Model.validateArray(this.contentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

