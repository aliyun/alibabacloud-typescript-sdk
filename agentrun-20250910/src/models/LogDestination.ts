// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SLSLogDestination } from "./SlslogDestination";


export class LogDestination extends $dara.Model {
  /**
   * @remarks
   * 阿里云日志服务（SLS）的日志目标配置
   */
  slsLogDestination?: SLSLogDestination;
  static names(): { [key: string]: string } {
    return {
      slsLogDestination: 'slsLogDestination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsLogDestination: SLSLogDestination,
    };
  }

  validate() {
    if(this.slsLogDestination && typeof (this.slsLogDestination as any).validate === 'function') {
      (this.slsLogDestination as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

