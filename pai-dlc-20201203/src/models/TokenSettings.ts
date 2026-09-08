// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TokenSettings extends $dara.Model {
  enableCrossAccountAccess?: boolean;
  enableLogDownloadJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableCrossAccountAccess: 'EnableCrossAccountAccess',
      enableLogDownloadJob: 'EnableLogDownloadJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCrossAccountAccess: 'boolean',
      enableLogDownloadJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

