// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrgHonorTemplateResponseBody extends $dara.Model {
  honorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      honorId: 'honorId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honorId: 'string',
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

