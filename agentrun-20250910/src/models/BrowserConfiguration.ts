// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ViewPortConfiguration } from "./ViewPortConfiguration";


export class BrowserConfiguration extends $dara.Model {
  browserType?: string;
  /**
   * @remarks
   * 要启用的浏览器扩展列表
   */
  enableExtension?: string[];
  /**
   * @remarks
   * 是否以无头模式运行浏览器
   */
  headless?: boolean;
  /**
   * @remarks
   * 浏览器用户代理字符串
   */
  userAgent?: string;
  viewPort?: ViewPortConfiguration;
  static names(): { [key: string]: string } {
    return {
      browserType: 'browserType',
      enableExtension: 'enableExtension',
      headless: 'headless',
      userAgent: 'userAgent',
      viewPort: 'viewPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserType: 'string',
      enableExtension: { 'type': 'array', 'itemType': 'string' },
      headless: 'boolean',
      userAgent: 'string',
      viewPort: ViewPortConfiguration,
    };
  }

  validate() {
    if(Array.isArray(this.enableExtension)) {
      $dara.Model.validateArray(this.enableExtension);
    }
    if(this.viewPort && typeof (this.viewPort as any).validate === 'function') {
      (this.viewPort as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

