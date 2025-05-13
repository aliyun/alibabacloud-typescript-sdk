// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotSettingResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic backup.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Automatic backup time configuration, using Quartz Cron expression.
   * 
   * @example
   * 0 0 01 ? * * *
   */
  quartzRegex?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      quartzRegex: 'QuartzRegex',
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

