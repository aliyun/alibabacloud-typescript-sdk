// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResultsValue extends $dara.Model {
  routeId?: string;
  status?: string;
  errorMessage?: string;
  skipReason?: string;
  static names(): { [key: string]: string } {
    return {
      routeId: 'routeId',
      status: 'status',
      errorMessage: 'errorMessage',
      skipReason: 'skipReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'string',
      status: 'string',
      errorMessage: 'string',
      skipReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

