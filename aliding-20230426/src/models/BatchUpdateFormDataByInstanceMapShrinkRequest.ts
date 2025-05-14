// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFormDataByInstanceMapShrinkRequest extends $dara.Model {
  /**
   * @example
   * String
   */
  appType?: string;
  /**
   * @example
   * false
   */
  asynchronousExecution?: boolean;
  /**
   * @example
   * FORM-GX866MC1NC1VOFF6WVQW33FD16E23L3CPMKVKA
   */
  formUuid?: string;
  /**
   * @example
   * false
   */
  ignoreEmpty?: boolean;
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
  updateFormDataJsonMapShrink?: string;
  /**
   * @example
   * false
   */
  useLatestFormSchemaVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      asynchronousExecution: 'AsynchronousExecution',
      formUuid: 'FormUuid',
      ignoreEmpty: 'IgnoreEmpty',
      noExecuteExpression: 'NoExecuteExpression',
      systemToken: 'SystemToken',
      updateFormDataJsonMapShrink: 'UpdateFormDataJsonMap',
      useLatestFormSchemaVersion: 'UseLatestFormSchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      asynchronousExecution: 'boolean',
      formUuid: 'string',
      ignoreEmpty: 'boolean',
      noExecuteExpression: 'boolean',
      systemToken: 'string',
      updateFormDataJsonMapShrink: 'string',
      useLatestFormSchemaVersion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

