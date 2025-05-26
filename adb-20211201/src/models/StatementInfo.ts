// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatementInfo extends $dara.Model {
  code?: string;
  completedTimeInMills?: number;
  output?: string;
  process?: number;
  startedTimeInMills?: number;
  state?: string;
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completedTimeInMills: 'CompletedTimeInMills',
      output: 'Output',
      process: 'Process',
      startedTimeInMills: 'StartedTimeInMills',
      state: 'State',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedTimeInMills: 'number',
      output: 'string',
      process: 'number',
      startedTimeInMills: 'number',
      state: 'string',
      statementId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

