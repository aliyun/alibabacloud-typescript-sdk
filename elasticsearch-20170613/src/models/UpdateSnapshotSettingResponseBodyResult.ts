// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSnapshotSettingResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic backup.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The start time of automatic backup.
   * 
   * @example
   * 0 0 01 ? * * *
   */
  quartzRegex?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      quartzRegex: 'quartzRegex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      quartzRegex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

