// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProhibitedSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the prohibited software to delete. Duplicate IDs are not allowed. You can specify up to 100 IDs.
   * 
   * This parameter is required.
   */
  softwareIds?: string[];
  static names(): { [key: string]: string } {
    return {
      softwareIds: 'SoftwareIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.softwareIds)) {
      $dara.Model.validateArray(this.softwareIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

