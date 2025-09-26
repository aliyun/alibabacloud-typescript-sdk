// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FCLinkConfig extends $dara.Model {
  functionName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

