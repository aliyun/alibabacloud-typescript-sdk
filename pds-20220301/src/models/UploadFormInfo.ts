// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadFormInfo extends $dara.Model {
  endpoint?: string;
  formData?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      formData: 'form_data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.formData) {
      $dara.Model.validateMap(this.formData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

