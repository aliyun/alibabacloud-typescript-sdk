// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePageDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * The language type. Valid values:
   * - **en**: English.
   * - **zh**: Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page name. Valid values:
   * - **overview**: overview page
   * - **access**: access control page
   * - **switch**: firewall page.
   * 
   * This parameter is required.
   * 
   * @example
   * overview
   */
  pageName?: string;
  /**
   * @remarks
   * The tracing code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 223.167.221.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The name of the protected object in the access control policy.
   * 
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

