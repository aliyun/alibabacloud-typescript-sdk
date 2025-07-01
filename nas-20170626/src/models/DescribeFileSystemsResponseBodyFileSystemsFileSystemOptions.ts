// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystemsFileSystemOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the oplock feature. Valid values:
   * 
   * *   true: enables the feature.
   * *   false: disables the feature.
   * 
   * >  Only Server Message Block (SMB) file systems support this feature.
   * 
   * @example
   * true
   */
  enableOplock?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableOplock: 'EnableOplock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOplock: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

