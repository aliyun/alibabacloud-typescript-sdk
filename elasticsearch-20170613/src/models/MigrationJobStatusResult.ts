// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrationJobStatusResult extends $dara.Model {
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

