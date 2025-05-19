// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

