// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotSettingResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic backup is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The automatic backup time configuration, specified as a Quartz Cron expression.
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

export class DescribeSnapshotSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeSnapshotSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSnapshotSettingResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

