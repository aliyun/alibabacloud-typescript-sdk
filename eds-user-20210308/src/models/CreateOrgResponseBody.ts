// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrgResponseBody extends $dara.Model {
  /**
   * @example
   * org-evk12ozjvmlxl****
   */
  orgId?: string;
  /**
   * @example
   * 7A2C3803-C975-5871-A232-80A91009****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
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

