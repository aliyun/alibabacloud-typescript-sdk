// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaEntityWriteResult extends $dara.Model {
  entityType?: string;
  errorMessage?: string;
  id?: string;
  name?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      name: 'Name',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      errorMessage: 'string',
      id: 'string',
      name: 'string',
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

