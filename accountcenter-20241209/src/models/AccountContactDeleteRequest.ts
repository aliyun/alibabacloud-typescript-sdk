// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * xxx
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the account contact to delete. You can call AccountContactQueryPageList to query account contact information by page.
   * 
   * @example
   * xxx
   */
  contactId?: number;
  /**
   * @remarks
   * The entity ID of the cross-enterprise management object.
   * 
   * @example
   * null
   */
  orientedEcId?: string;
  /**
   * @remarks
   * The enterprise currently switched to.
   * 
   * @example
   * null
   */
  orientedLeId?: string;
  /**
   * @remarks
   * The marketplace ID of the cross-enterprise management object.
   * 
   * @example
   * null
   */
  orientedNbId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      contactId: 'ContactId',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      contactId: 'number',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

