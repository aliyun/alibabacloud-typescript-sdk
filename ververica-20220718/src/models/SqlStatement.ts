// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlStatement extends $dara.Model {
  index?: number;
  message?: string;
  sqlScript?: string;
  statusState?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      message: 'message',
      sqlScript: 'sqlScript',
      statusState: 'statusState',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      message: 'string',
      sqlScript: 'string',
      statusState: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

