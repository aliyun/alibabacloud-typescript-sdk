// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessApplicationL7SwitchesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the internal access applications. You can specify up to 100 application IDs.
   */
  applicationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

