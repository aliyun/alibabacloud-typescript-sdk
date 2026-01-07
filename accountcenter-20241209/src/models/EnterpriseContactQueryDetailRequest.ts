// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactQueryDetailRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  appName?: string;
  /**
   * @example
   * xxx
   */
  contactId?: number;
  /**
   * @example
   * null
   */
  orientedEcId?: string;
  /**
   * @example
   * null
   */
  orientedLeId?: string;
  /**
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

