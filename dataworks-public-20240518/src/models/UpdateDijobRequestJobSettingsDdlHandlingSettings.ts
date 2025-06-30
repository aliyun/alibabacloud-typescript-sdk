// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobRequestJobSettingsDdlHandlingSettings extends $dara.Model {
  action?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

