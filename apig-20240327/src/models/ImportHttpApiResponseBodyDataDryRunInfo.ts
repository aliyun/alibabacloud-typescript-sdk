// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";
import { ImportHttpApiResponseBodyDataDryRunInfoFailureComponents } from "./ImportHttpApiResponseBodyDataDryRunInfoFailureComponents";
import { ImportHttpApiResponseBodyDataDryRunInfoFailureOperations } from "./ImportHttpApiResponseBodyDataDryRunInfoFailureOperations";
import { ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents } from "./ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents";
import { ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations } from "./ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations";


export class ImportHttpApiResponseBodyDataDryRunInfo extends $dara.Model {
  /**
   * @remarks
   * The error messages. If an error message is returned, the API fails to be imported.
   */
  errorMessages?: string[];
  /**
   * @remarks
   * The existing APIs. If an existing API is returned, the import updates the existing API.
   */
  existHttpApiInfo?: HttpApiApiInfo;
  /**
   * @remarks
   * The data structs that fail the dry run.
   */
  failureComponents?: ImportHttpApiResponseBodyDataDryRunInfoFailureComponents[];
  /**
   * @remarks
   * The operations that fail the dry run.
   */
  failureOperations?: ImportHttpApiResponseBodyDataDryRunInfoFailureOperations[];
  /**
   * @remarks
   * The data structs that pass the dry run.
   */
  successComponents?: ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents[];
  /**
   * @remarks
   * The operations that pass the dry run.
   */
  successOperations?: ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations[];
  /**
   * @remarks
   * The alerts. If an alert is returned, specific operations or structs may fail to be imported.
   */
  warningMessages?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMessages: 'errorMessages',
      existHttpApiInfo: 'existHttpApiInfo',
      failureComponents: 'failureComponents',
      failureOperations: 'failureOperations',
      successComponents: 'successComponents',
      successOperations: 'successOperations',
      warningMessages: 'warningMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessages: { 'type': 'array', 'itemType': 'string' },
      existHttpApiInfo: HttpApiApiInfo,
      failureComponents: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureComponents },
      failureOperations: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoFailureOperations },
      successComponents: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents },
      successOperations: { 'type': 'array', 'itemType': ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations },
      warningMessages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.errorMessages)) {
      $dara.Model.validateArray(this.errorMessages);
    }
    if(this.existHttpApiInfo && typeof (this.existHttpApiInfo as any).validate === 'function') {
      (this.existHttpApiInfo as any).validate();
    }
    if(Array.isArray(this.failureComponents)) {
      $dara.Model.validateArray(this.failureComponents);
    }
    if(Array.isArray(this.failureOperations)) {
      $dara.Model.validateArray(this.failureOperations);
    }
    if(Array.isArray(this.successComponents)) {
      $dara.Model.validateArray(this.successComponents);
    }
    if(Array.isArray(this.successOperations)) {
      $dara.Model.validateArray(this.successOperations);
    }
    if(Array.isArray(this.warningMessages)) {
      $dara.Model.validateArray(this.warningMessages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

