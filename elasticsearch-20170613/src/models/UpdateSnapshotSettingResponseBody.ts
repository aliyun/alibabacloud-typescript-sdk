// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSnapshotSettingResponseBodyResult extends $dara.Model {
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

export class UpdateSnapshotSettingResponseBody extends $dara.Model {
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
  result?: UpdateSnapshotSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateSnapshotSettingResponseBodyResult,
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

