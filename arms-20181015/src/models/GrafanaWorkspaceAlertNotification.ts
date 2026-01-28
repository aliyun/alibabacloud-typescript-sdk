// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceAlertNotification extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * true
   */
  isArms?: boolean;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * true
   */
  sendReminder?: boolean;
  /**
   * @example
   * {}
   */
  settings?: string;
  /**
   * @example
   * Email
   */
  type?: string;
  /**
   * @example
   * Xfdf******
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isArms: 'isArms',
      isDefault: 'isDefault',
      name: 'name',
      sendReminder: 'sendReminder',
      settings: 'settings',
      type: 'type',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      isArms: 'boolean',
      isDefault: 'boolean',
      name: 'string',
      sendReminder: 'boolean',
      settings: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

