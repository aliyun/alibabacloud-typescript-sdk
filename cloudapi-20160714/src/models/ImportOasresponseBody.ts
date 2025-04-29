// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportOASResponseBodyErrorMessages } from "./ImportOasresponseBodyErrorMessages";
import { ImportOASResponseBodyFailedApis } from "./ImportOasresponseBodyFailedApis";
import { ImportOASResponseBodyFailedModels } from "./ImportOasresponseBodyFailedModels";
import { ImportOASResponseBodySuccessApis } from "./ImportOasresponseBodySuccessApis";
import { ImportOASResponseBodySuccessModels } from "./ImportOasresponseBodySuccessModels";
import { ImportOASResponseBodyWarningMessages } from "./ImportOasresponseBodyWarningMessages";


export class ImportOASResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error messages that appear due to the invalid data in the imported file.
   */
  errorMessages?: ImportOASResponseBodyErrorMessages;
  /**
   * @remarks
   * The APIs that failed to pass the precheck.
   */
  failedApis?: ImportOASResponseBodyFailedApis;
  /**
   * @remarks
   * The information about the models that failed to pass the precheck.
   */
  failedModels?: ImportOASResponseBodyFailedModels;
  /**
   * @remarks
   * The ID of the asynchronous API import task that was generated during the import operation. This ID is used to query the execution status of the API import task.
   * 
   * @example
   * c16a1880f5164d779f6a54f64d997cd9
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7FE7172-AA75-5880-B6F7-C00893E9BC06
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the APIs that have passed the precheck.
   */
  successApis?: ImportOASResponseBodySuccessApis;
  /**
   * @remarks
   * The information about the models that have passed the precheck.
   */
  successModels?: ImportOASResponseBodySuccessModels;
  /**
   * @remarks
   * The warning messages that appear due to the invalid data in the imported file.
   */
  warningMessages?: ImportOASResponseBodyWarningMessages;
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'ErrorMessages',
      failedApis: 'FailedApis',
      failedModels: 'FailedModels',
      operationId: 'OperationId',
      requestId: 'RequestId',
      successApis: 'SuccessApis',
      successModels: 'SuccessModels',
      warningMessages: 'WarningMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: ImportOASResponseBodyErrorMessages,
      failedApis: ImportOASResponseBodyFailedApis,
      failedModels: ImportOASResponseBodyFailedModels,
      operationId: 'string',
      requestId: 'string',
      successApis: ImportOASResponseBodySuccessApis,
      successModels: ImportOASResponseBodySuccessModels,
      warningMessages: ImportOASResponseBodyWarningMessages,
    };
  }

  validate() {
    if(this.errorMessages && typeof (this.errorMessages as any).validate === 'function') {
      (this.errorMessages as any).validate();
    }
    if(this.failedApis && typeof (this.failedApis as any).validate === 'function') {
      (this.failedApis as any).validate();
    }
    if(this.failedModels && typeof (this.failedModels as any).validate === 'function') {
      (this.failedModels as any).validate();
    }
    if(this.successApis && typeof (this.successApis as any).validate === 'function') {
      (this.successApis as any).validate();
    }
    if(this.successModels && typeof (this.successModels as any).validate === 'function') {
      (this.successModels as any).validate();
    }
    if(this.warningMessages && typeof (this.warningMessages as any).validate === 'function') {
      (this.warningMessages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

