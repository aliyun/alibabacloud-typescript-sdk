// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectDefaultQuotaRequest extends $dara.Model {
  quota?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

