// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceGlobalizationConfigResponseBodyGlobalizationConfig extends $dara.Model {
  /**
   * @remarks
   * 语言
   * 
   * @example
   * zh-Hans-CN
   */
  language?: string;
  /**
   * @remarks
   * 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceGlobalizationConfigResponseBody extends $dara.Model {
  globalizationConfig?: GetInstanceGlobalizationConfigResponseBodyGlobalizationConfig;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalizationConfig: 'GlobalizationConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalizationConfig: GetInstanceGlobalizationConfigResponseBodyGlobalizationConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.globalizationConfig && typeof (this.globalizationConfig as any).validate === 'function') {
      (this.globalizationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

