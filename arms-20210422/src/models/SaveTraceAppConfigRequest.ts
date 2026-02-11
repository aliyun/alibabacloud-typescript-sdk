// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTraceAppConfigRequestSettings extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  pid?: string;
  settings?: SaveTraceAppConfigRequestSettings[];
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      settings: { 'type': 'array', 'itemType': SaveTraceAppConfigRequestSettings },
    };
  }

  validate() {
    if(Array.isArray(this.settings)) {
      $dara.Model.validateArray(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

