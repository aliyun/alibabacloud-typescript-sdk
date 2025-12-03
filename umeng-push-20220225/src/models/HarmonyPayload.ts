// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HarmonyBody } from "./HarmonyBody";


export class HarmonyPayload extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  displayType?: string;
  extra?: { [key: string]: any };
  harmonyBody?: HarmonyBody;
  static names(): { [key: string]: string } {
    return {
      displayType: 'displayType',
      extra: 'extra',
      harmonyBody: 'harmonyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayType: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      harmonyBody: HarmonyBody,
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(this.harmonyBody && typeof (this.harmonyBody as any).validate === 'function') {
      (this.harmonyBody as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

