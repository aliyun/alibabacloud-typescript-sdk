// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PermissionResult extends $dara.Model {
  allow?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allow: 'allow',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

