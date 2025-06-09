// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLoggingRequestLoggingDetails } from "./UpdateLoggingRequestLoggingDetails";


export class UpdateLoggingRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of service logs.
   * 
   * This parameter is required.
   */
  loggingDetails?: UpdateLoggingRequestLoggingDetails[];
  /**
   * @remarks
   * The name of the project to which you want to save service logs.
   * 
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
      loggingDetails: { 'type': 'array', 'itemType': UpdateLoggingRequestLoggingDetails },
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

