// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrimPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to prevent all empty cells from being deleted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  disableDeleteEmptyCell?: boolean;
  /**
   * @remarks
   * Specifies whether to prevent all duplicate styles from being deleted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  disableDeleteRepeatedStyle?: boolean;
  /**
   * @remarks
   * Specifies whether to prevent unused cell images from being deleted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  disableDeleteUnusedPicture?: boolean;
  /**
   * @remarks
   * Specifies whether to prevent unused shapes from being deleted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

