// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateRemediationsResponseBodyRemediationDeleteResults extends $dara.Model {
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

