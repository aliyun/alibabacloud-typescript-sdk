// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiMcpServerValidateHclResponseBody extends $dara.Model {
  /**
   * @example
   * Argument or block definition required: An argument or block definition is required here.
   */
  diagnosticReport?: any;
  errors?: string[];
  /**
   * @example
   * 0628e13692023222bef9d6377dd03da3304b689e1b2df60f584ea27b4163bf07
   */
  hash?: string;
  /**
   * @example
   * true
   */
  isValid?: boolean;
  parameters?: any[];
  /**
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
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

