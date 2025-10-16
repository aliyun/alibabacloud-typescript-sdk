// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageDocumentsRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * overview
   */
  pageName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @example
   * 223.167.221.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * internet
   */
  tabName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageName: 'PageName',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      tabName: 'TabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageName: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      tabName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

