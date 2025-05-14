// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStatusRequest extends $dara.Model {
  /**
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  errorLines?: number[];
  /**
   * @example
   * seq-123
   */
  importSequence?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      errorLines: 'ErrorLines',
      importSequence: 'ImportSequence',
      language: 'Language',
      status: 'Status',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      errorLines: { 'type': 'array', 'itemType': 'number' },
      importSequence: 'string',
      language: 'string',
      status: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorLines)) {
      $dara.Model.validateArray(this.errorLines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

