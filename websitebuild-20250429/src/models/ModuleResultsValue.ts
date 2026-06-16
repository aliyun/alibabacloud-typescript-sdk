// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModuleResultsValue extends $dara.Model {
  /**
   * @remarks
   * 是否通过检查
   * 
   * @example
   * true
   */
  passed?: boolean;
  /**
   * @remarks
   * 资源标识
   * 
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @remarks
   * 失败时的错误码，通过时为null
   * 
   * @example
   * Resource.Control.No.Usage
   */
  errorCode?: string;
  /**
   * @remarks
   * 失败时的错误信息，通过时为null
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

