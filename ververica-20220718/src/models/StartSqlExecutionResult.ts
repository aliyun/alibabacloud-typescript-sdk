// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSqlExecutionResult extends $dara.Model {
  newlyCreated?: boolean;
  sqlExecutionId?: string;
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

