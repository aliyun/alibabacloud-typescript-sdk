// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SqlFile } from "./SqlFile";


export class CreateSqlFileRequest extends $dara.Model {
  /**
   * @remarks
   * The request body, which contains the SQL file content and related metadata to be created.
   */
  body?: SqlFile;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SqlFile,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

