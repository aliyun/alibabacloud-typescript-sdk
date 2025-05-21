// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentInfo extends $dara.Model {
  documentType?: string;
  id?: string;
  name?: string;
  processStatus?: string;
  static names(): { [key: string]: string } {
    return {
      documentType: 'documentType',
      id: 'id',
      name: 'name',
      processStatus: 'processStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentType: 'string',
      id: 'string',
      name: 'string',
      processStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

