// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleResultsValue extends $dara.Model {
  /**
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @example
   * Resource.Control.No.Usage
   */
  errorCode?: string;
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

