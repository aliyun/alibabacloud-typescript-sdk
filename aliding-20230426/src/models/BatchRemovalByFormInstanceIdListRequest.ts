// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRemovalByFormInstanceIdListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_XCE0EVXS6DYG3YDYC5RD
   */
  appType?: string;
  /**
   * @example
   * false
   */
  asynchronousExecution?: boolean;
  /**
   * @example
   * false
   */
  executeExpression?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  formInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-GX866MC1NC1VOFF6WVQW33FD16E23L3CPMKVKA
   */
  formUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 09866181UTZVVD4R3DC955FNKIM52HVPU5WWK7
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      asynchronousExecution: 'AsynchronousExecution',
      executeExpression: 'ExecuteExpression',
      formInstanceIdList: 'FormInstanceIdList',
      formUuid: 'FormUuid',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      asynchronousExecution: 'boolean',
      executeExpression: 'boolean',
      formInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      formUuid: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formInstanceIdList)) {
      $dara.Model.validateArray(this.formInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

