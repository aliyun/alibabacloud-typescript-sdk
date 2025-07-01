// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecycleBinAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The retention period of the files in the recycle bin. Unit: days.
   * 
   * Valid values: 1 to 180.
   * 
   * Default value: 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  reservedDays?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      reservedDays: 'ReservedDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      reservedDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

