// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default version number.
   * 
   * @example
   * 2
   */
  defaultVersion?: number;
  /**
   * @remarks
   * The time the template was last modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:00Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The request ID, used for diagnostics and troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 2
   */
  version?: number;
  /**
   * @remarks
   * Indicates whether a new version was created.
   * 
   * @example
   * true
   */
  versionCreated?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      gmtModifyTime: 'GmtModifyTime',
      requestId: 'RequestId',
      version: 'Version',
      versionCreated: 'VersionCreated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'number',
      gmtModifyTime: 'string',
      requestId: 'string',
      version: 'number',
      versionCreated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

