// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTimedResidentResourcePoolApplicationOutput extends $dara.Model {
  applicationStatus?: string;
  timedPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationStatus: 'applicationStatus',
      timedPoolId: 'timedPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationStatus: 'string',
      timedPoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

