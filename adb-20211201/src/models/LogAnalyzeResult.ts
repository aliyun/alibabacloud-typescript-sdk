// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogAnalyzeResult extends $dara.Model {
  appErrorAdvice?: string;
  /**
   * @example
   * EXCEEDED_QUOTA
   */
  appErrorCode?: string;
  /**
   * @example
   * exception: xxxx
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

