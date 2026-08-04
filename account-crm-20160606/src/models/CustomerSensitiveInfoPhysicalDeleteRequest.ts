// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerSensitiveInfoPhysicalDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

