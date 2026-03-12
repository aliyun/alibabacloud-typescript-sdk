// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForSubmittingDomainNameCredentialByTemplateIdResponseBody extends $dara.Model {
  requestId?: string;
  success?: boolean;
  taskNo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskNo: 'TaskNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

