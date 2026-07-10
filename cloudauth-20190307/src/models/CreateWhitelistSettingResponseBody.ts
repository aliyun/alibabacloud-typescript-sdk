// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWhitelistSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF4979D3-060F-5336-BD9F-0D46ECB66B22
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result that indicates whether the whitelist is created. Valid values:
   * - true: Succeeded.
   * - false: Failed.
   * 
   * @example
   * true
   */
  resultObject?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

