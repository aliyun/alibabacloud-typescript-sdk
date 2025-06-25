// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupRequestUserDefinePolicy extends $dara.Model {
  customConfig?: string;
  static names(): { [key: string]: string } {
    return {
      customConfig: 'CustomConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

