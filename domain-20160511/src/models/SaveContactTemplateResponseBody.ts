// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactTemplateResponseBody extends $dara.Model {
  contactTemplateId?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactTemplateId: 'ContactTemplateId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplateId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

