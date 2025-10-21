// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Log4jLogger } from "./Log4jLogger";
import { LogReservePolicy } from "./LogReservePolicy";


export class Logging extends $dara.Model {
  /**
   * @example
   * xml格式文本
   */
  log4j2ConfigurationTemplate?: string;
  log4jLoggers?: Log4jLogger[];
  logReservePolicy?: LogReservePolicy;
  /**
   * @example
   * oss
   */
  loggingProfile?: string;
  static names(): { [key: string]: string } {
    return {
      log4j2ConfigurationTemplate: 'log4j2ConfigurationTemplate',
      log4jLoggers: 'log4jLoggers',
      logReservePolicy: 'logReservePolicy',
      loggingProfile: 'loggingProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log4j2ConfigurationTemplate: 'string',
      log4jLoggers: { 'type': 'array', 'itemType': Log4jLogger },
      logReservePolicy: LogReservePolicy,
      loggingProfile: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.log4jLoggers)) {
      $dara.Model.validateArray(this.log4jLoggers);
    }
    if(this.logReservePolicy && typeof (this.logReservePolicy as any).validate === 'function') {
      (this.logReservePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

