// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMinorVersionResponseBody extends $dara.Model {
  newVersion?: string;
  oldVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newVersion: 'NewVersion',
      oldVersion: 'OldVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newVersion: 'string',
      oldVersion: 'string',
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

