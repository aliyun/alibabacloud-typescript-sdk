// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaStoreConf extends $dara.Model {
  dbPassword?: string;
  dbUrl?: string;
  dbUserName?: string;
  static names(): { [key: string]: string } {
    return {
      dbPassword: 'DbPassword',
      dbUrl: 'DbUrl',
      dbUserName: 'DbUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbPassword: 'string',
      dbUrl: 'string',
      dbUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

