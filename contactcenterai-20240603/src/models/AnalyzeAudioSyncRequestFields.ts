// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeAudioSyncRequestFieldsEnumValues } from "./AnalyzeAudioSyncRequestFieldsEnumValues";


export class AnalyzeAudioSyncRequestFields extends $dara.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  desc?: string;
  enumValues?: AnalyzeAudioSyncRequestFieldsEnumValues[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      desc: 'desc',
      enumValues: 'enumValues',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestFieldsEnumValues },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enumValues)) {
      $dara.Model.validateArray(this.enumValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

