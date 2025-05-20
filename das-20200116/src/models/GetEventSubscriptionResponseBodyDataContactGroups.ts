// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventSubscriptionResponseBodyDataContactGroups extends $dara.Model {
  /**
   * @remarks
   * The members of the alert contact group.
   * 
   * @example
   * "[\\"Mr. Zhang\\",\\"Ms. Wang\\",\\"Mr. Li\\"]"
   */
  contacts?: string;
  /**
   * @remarks
   * The description of the alert contact group.
   * 
   * @example
   * Default contact
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * Mr. Zhang
   */
  name?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1088760496****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      description: 'description',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: 'string',
      description: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

