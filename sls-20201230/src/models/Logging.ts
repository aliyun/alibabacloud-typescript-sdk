// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LoggingLoggingDetails } from "./LoggingLoggingDetails";


export class Logging extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  loggingDetails?: LoggingLoggingDetails[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  loggingProject?: string;
  static names(): { [key: string]: string } {
    return {
      loggingDetails: 'loggingDetails',
      loggingProject: 'loggingProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggingDetails: { 'type': 'array', 'itemType': LoggingLoggingDetails },
      loggingProject: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loggingDetails)) {
      $dara.Model.validateArray(this.loggingDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

