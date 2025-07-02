// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FunctionRestriction extends $dara.Model {
  disable?: boolean;
  lastModifiedTime?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      disable: 'disable',
      lastModifiedTime: 'lastModifiedTime',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disable: 'boolean',
      lastModifiedTime: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

