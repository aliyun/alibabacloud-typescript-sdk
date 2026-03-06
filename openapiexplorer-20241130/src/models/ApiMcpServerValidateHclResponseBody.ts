// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiMcpServerValidateHclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic report of the code.
   * 
   * @example
   * Argument or block definition required: An argument or block definition is required here.
   */
  diagnosticReport?: any;
  /**
   * @remarks
   * The list of error messages.
   */
  errors?: string[];
  /**
   * @remarks
   * The unique identifier of the Terraform HCL code.
   * 
   * @example
   * 0628e13692023222bef9d6377dd03da3304b689e1b2df60f584ea27b4163bf07
   */
  hash?: string;
  /**
   * @remarks
   * Indicates whether the code is valid.
   * 
   * @example
   * true
   */
  isValid?: boolean;
  /**
   * @remarks
   * The list of parameters.
   */
  parameters?: any[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  /**
   * @remarks
   * The list of warning messages.
   */
  warnings?: string[];
  static names(): { [key: string]: string } {
    return {
      diagnosticReport: 'diagnosticReport',
      errors: 'errors',
      hash: 'hash',
      isValid: 'isValid',
      parameters: 'parameters',
      requestId: 'requestId',
      warnings: 'warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosticReport: 'any',
      errors: { 'type': 'array', 'itemType': 'string' },
      hash: 'string',
      isValid: 'boolean',
      parameters: { 'type': 'array', 'itemType': 'any' },
      requestId: 'string',
      warnings: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.errors)) {
      $dara.Model.validateArray(this.errors);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

