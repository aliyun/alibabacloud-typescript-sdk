// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultVodTemplateResponseBody extends $dara.Model {
  requestId?: string;
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

