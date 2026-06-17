// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchPolarClawConfigShrinkRequest extends $dara.Model {
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
   * A JSON merge-patch object.
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
  configPatchShrink?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after applying the patch. The default is `true`.
   * 
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      configPatchShrink: 'ConfigPatch',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      configPatchShrink: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

