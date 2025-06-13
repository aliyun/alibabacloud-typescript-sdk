// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAScriptsResponseBodyAScriptIds extends $dara.Model {
  /**
   * @remarks
   * The AScript rule ID.
   * 
   * @example
   * as-xvq5igaa7uv6vr****
   */
  AScriptId?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptId: 'AScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

