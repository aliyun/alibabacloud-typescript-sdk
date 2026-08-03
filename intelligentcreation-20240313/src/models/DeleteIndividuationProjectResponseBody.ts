// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIndividuationProjectResponseBody extends $dara.Model {
  desc?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      requestId: 'string',
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

