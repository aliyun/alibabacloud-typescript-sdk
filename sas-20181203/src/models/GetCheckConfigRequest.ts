// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckConfigRequest extends $dara.Model {
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

