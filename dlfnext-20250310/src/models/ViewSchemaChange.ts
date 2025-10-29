// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSchemaChange extends $dara.Model {
  action?: string;
  /**
   * @remarks
   * required in UpdateComment
   */
  comment?: string;
  /**
   * @remarks
   * required in AddDialect/UpdateDialect/DropDialect
   */
  dialect?: string;
  /**
   * @remarks
   * required in SetOption/RemoveOption
   */
  key?: string;
  /**
   * @remarks
   * required in AddDialect/UpdateDialect
   */
  query?: string;
  /**
   * @remarks
   * required in SetOption
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      comment: 'comment',
      dialect: 'dialect',
      key: 'key',
      query: 'query',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      comment: 'string',
      dialect: 'string',
      key: 'string',
      query: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

