// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TcpConfig extends $dara.Model {
  establishedTimeout?: number;
  persistenceTimeout?: number;
  scheduler?: string;
  static names(): { [key: string]: string } {
    return {
      establishedTimeout: 'EstablishedTimeout',
      persistenceTimeout: 'PersistenceTimeout',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      establishedTimeout: 'number',
      persistenceTimeout: 'number',
      scheduler: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

