// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchPolarClawConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The JSON merge patch object.
   * 
   * @example
   * {
   *     "tools": {
   *         "web": {
   *             "search": {
   *                 "enabled": false
   *             }
   *         }
   *     }
   * }
   */
  configPatch?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to restart the gateway after the patch is applied. Default value: true.
   * 
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      configPatch: 'ConfigPatch',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      configPatch: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      restart: 'boolean',
    };
  }

  validate() {
    if(this.configPatch) {
      $dara.Model.validateMap(this.configPatch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

