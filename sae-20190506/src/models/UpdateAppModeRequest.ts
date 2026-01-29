// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppModeRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  appIds?: string;
  /**
   * @remarks
   * Enable Idle Mode?
   * 
   * Enumeration value:
   * 
   * *   true: enables.
   * *   false: disables.
   * 
   * @example
   * true
   */
  enableIdle?: boolean;
  idleHour?: string;
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appIds: 'AppIds',
      enableIdle: 'EnableIdle',
      idleHour: 'IdleHour',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appIds: 'string',
      enableIdle: 'boolean',
      idleHour: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

