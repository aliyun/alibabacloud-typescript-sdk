// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceModuleStatusResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * 模块状态
   * 
   * @example
   * enabled
   */
  moduleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      moduleStatus: 'ModuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceModuleStatusResponseBody extends $dara.Model {
  module?: CheckInstanceModuleStatusResponseBodyModule;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: CheckInstanceModuleStatusResponseBodyModule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

