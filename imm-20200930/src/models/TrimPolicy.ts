// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrimPolicy extends $dara.Model {
  disableDeleteEmptyCell?: boolean;
  disableDeleteRepeatedStyle?: boolean;
  disableDeleteUnusedPicture?: boolean;
  disableDeleteUnusedShape?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableDeleteEmptyCell: 'DisableDeleteEmptyCell',
      disableDeleteRepeatedStyle: 'DisableDeleteRepeatedStyle',
      disableDeleteUnusedPicture: 'DisableDeleteUnusedPicture',
      disableDeleteUnusedShape: 'DisableDeleteUnusedShape',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableDeleteEmptyCell: 'boolean',
      disableDeleteRepeatedStyle: 'boolean',
      disableDeleteUnusedPicture: 'boolean',
      disableDeleteUnusedShape: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

