// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBrowserOut extends $dara.Model {
  browserId?: string;
  browserName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      browserId: 'browserId',
      browserName: 'browserName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserId: 'string',
      browserName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

