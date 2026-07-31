// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogAnalyzeResult extends $dara.Model {
  /**
   * @remarks
   * The solution for the error log.
   * 
   * @example
   * Please increase cpu quota for your resource group
   */
  appErrorAdvice?: string;
  /**
   * @remarks
   * The error type if an analysis error occurs.
   * 
   * @example
   * EXCEEDED_QUOTA
   */
  appErrorCode?: string;
  /**
   * @remarks
   * The error log of the Spark log analysis task.
   * 
   * @example
   * exception: cpu is exceeded limits 12/10
   */
  appErrorLog?: string;
  static names(): { [key: string]: string } {
    return {
      appErrorAdvice: 'AppErrorAdvice',
      appErrorCode: 'AppErrorCode',
      appErrorLog: 'AppErrorLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appErrorAdvice: 'string',
      appErrorCode: 'string',
      appErrorLog: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

