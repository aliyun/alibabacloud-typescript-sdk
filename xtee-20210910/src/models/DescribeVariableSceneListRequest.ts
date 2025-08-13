// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVariableSceneListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Business type.
   * 
   * This parameter is required.
   * 
   * @example
   * variable_scene
   */
  bizType?: string;
  /**
   * @remarks
   * Configuration key.
   * 
   * @example
   * account_abuse_detection
   */
  configKey?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Page size, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Paging flag, default is true.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  paging?: boolean;
  /**
   * @remarks
   * Region code.
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

