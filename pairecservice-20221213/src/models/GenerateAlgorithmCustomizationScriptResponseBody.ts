// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAlgorithmCustomizationScriptResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  logId?: string;
  /**
   * @example
   * oss:xxxx
   */
  ossAddress?: string;
  /**
   * @example
   * 6CF1E160-3F36-5E73-A170-C75504F05BBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logId: 'LogId',
      ossAddress: 'OssAddress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logId: 'string',
      ossAddress: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

