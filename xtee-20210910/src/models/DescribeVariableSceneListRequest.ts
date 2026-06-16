// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableSceneListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The business type.
   * 
   * This parameter is required.
   * 
   * @example
   * variable_scene
   */
  bizType?: string;
  /**
   * @remarks
   * The configuration key.
   * 
   * @example
   * account_abuse_detection
   */
  configKey?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Specifies whether to enable paging. Default value: true.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  paging?: boolean;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      bizType: 'bizType',
      configKey: 'configKey',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      paging: 'paging',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      bizType: 'string',
      configKey: 'string',
      currentPage: 'string',
      pageSize: 'string',
      paging: 'boolean',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

