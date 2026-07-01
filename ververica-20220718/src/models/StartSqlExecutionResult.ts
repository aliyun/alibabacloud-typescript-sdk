// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSqlExecutionResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the SQL execution is newly created.
   */
  newlyCreated?: boolean;
  /**
   * @remarks
   * The SQL execution ID.
   */
  sqlExecutionId?: string;
  /**
   * @remarks
   * Indicates whether the SQL execution is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      newlyCreated: 'newlyCreated',
      sqlExecutionId: 'sqlExecutionId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newlyCreated: 'boolean',
      sqlExecutionId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

