// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertContactGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact group.
   * 
   * @example
   * 446*
   */
  contactGroupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70675725-8F11-4817-8106-CFE0AD71****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

