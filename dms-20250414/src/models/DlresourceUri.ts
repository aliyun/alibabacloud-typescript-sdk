// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLResourceUri extends $dara.Model {
  resourceType?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

