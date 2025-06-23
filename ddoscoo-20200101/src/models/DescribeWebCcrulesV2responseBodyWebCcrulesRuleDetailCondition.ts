// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition extends $dara.Model {
  /**
   * @remarks
   * The match content.
   * 
   * @example
   * 192.0.XX.XX
   */
  content?: string;
  /**
   * @remarks
   * The match content when the match method is Equals to One of Multiple Values.
   * 
   * @example
   * ["2","3","ad"]
   */
  contentList?: string;
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
   * The match method.
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
      contentList: 'string',
      field: 'string',
      headerName: 'string',
      matchMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

