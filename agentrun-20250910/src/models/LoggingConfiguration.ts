// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogDestination } from "./LogDestination";


export class LoggingConfiguration extends $dara.Model {
  /**
   * @remarks
   * 日志输出的目标配置列表
   */
  destinations?: LogDestination[];
  static names(): { [key: string]: string } {
    return {
      destinations: 'destinations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinations: { 'type': 'array', 'itemType': LogDestination },
    };
  }

  validate() {
    if(Array.isArray(this.destinations)) {
      $dara.Model.validateArray(this.destinations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

