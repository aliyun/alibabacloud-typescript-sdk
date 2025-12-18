// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRemediationsResponseBodyRemediationDeleteResults extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * *   If the remediation template is deleted, no error code is returned.
   * *   If the remediation template fails to be deleted, an error code is returned. For more information about error codes, see [Error codes](https://error-center.alibabacloud.com/status/product/Config).
   * 
   * @example
   * RemediationConfigNotExist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the remediation template.
   * 
   * @example
   * crr-909ba2d4716700eb****
   */
  remediationId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      remediationId: 'RemediationId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      remediationId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemediationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  remediationDeleteResults?: DeleteRemediationsResponseBodyRemediationDeleteResults[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4BE28FB1-616A-5586-82E4-F34FB2AF7441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationDeleteResults: 'RemediationDeleteResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationDeleteResults: { 'type': 'array', 'itemType': DeleteRemediationsResponseBodyRemediationDeleteResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediationDeleteResults)) {
      $dara.Model.validateArray(this.remediationDeleteResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

