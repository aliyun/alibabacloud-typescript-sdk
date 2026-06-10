// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleResultsValue extends $dara.Model {
  /**
   * @remarks
   * Whether the check is passed
   * 
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @remarks
   * Resource identity
   * 
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @remarks
   * Error code when failed; null when passed
   * 
   * @example
   * Resource.Control.No.Usage
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message when failed; null when passed
   * 
   * @example
   * 用量耗尽
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
      resourceCode: 'ResourceCode',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'boolean',
      resourceCode: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

