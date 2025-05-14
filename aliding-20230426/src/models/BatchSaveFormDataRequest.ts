// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSaveFormDataRequest extends $dara.Model {
  /**
   * @example
   * APP_XCE0EVXS6DYG3YDYC5RD
   */
  appType?: string;
  /**
   * @example
   * false
   */
  asynchronousExecution?: boolean;
  formDataJsonList?: string[];
  /**
   * @example
   * FORM-GX866MC1NC1VOFF6WVQW33FD16E23L3CPMKVKA
   */
  formUuid?: string;
  /**
   * @example
   * false
   */
  keepRunningAfterException?: boolean;
  /**
   * @example
   * false
   */
  noExecuteExpression?: boolean;
  /**
   * @example
   * 09866181UTZVVD4R3DC955FNKIM52HVPU5WWK7
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      asynchronousExecution: 'AsynchronousExecution',
      formDataJsonList: 'FormDataJsonList',
      formUuid: 'FormUuid',
      keepRunningAfterException: 'KeepRunningAfterException',
      noExecuteExpression: 'NoExecuteExpression',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      asynchronousExecution: 'boolean',
      formDataJsonList: { 'type': 'array', 'itemType': 'string' },
      formUuid: 'string',
      keepRunningAfterException: 'boolean',
      noExecuteExpression: 'boolean',
      systemToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formDataJsonList)) {
      $dara.Model.validateArray(this.formDataJsonList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

