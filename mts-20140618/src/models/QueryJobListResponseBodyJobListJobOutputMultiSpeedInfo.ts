// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputMultiSpeedInfo extends $dara.Model {
  /**
   * @remarks
   * The error code returned if high-speed transcoding is not enabled.
   * 
   * @example
   * Boost.NotNeedSpeed
   */
  code?: string;
  /**
   * @remarks
   * The downgrade policy if high-speed transcoding is not supported.
   * 
   * @example
   * NormalSpeed
   */
  downgradePolicy?: string;
  /**
   * @remarks
   * The duration of the output video.
   * 
   * @example
   * 21.0
   */
  duration?: number;
  /**
   * @remarks
   * Indicates whether high-speed transcoding is enabled.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The error message returned if high-speed transcoding is not enabled.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The actual transcoding speed.
   * 
   * @example
   * 6.576886940181647
   */
  realSpeed?: number;
  /**
   * @remarks
   * The speed setting.
   * 
   * @example
   * 30
   */
  settingSpeed?: number;
  /**
   * @remarks
   * The amount of time consumed.
   * 
   * @example
   * 3.193
   */
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downgradePolicy: 'DowngradePolicy',
      duration: 'Duration',
      enable: 'Enable',
      message: 'Message',
      realSpeed: 'RealSpeed',
      settingSpeed: 'SettingSpeed',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downgradePolicy: 'string',
      duration: 'number',
      enable: 'string',
      message: 'string',
      realSpeed: 'number',
      settingSpeed: 'number',
      timeCost: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

