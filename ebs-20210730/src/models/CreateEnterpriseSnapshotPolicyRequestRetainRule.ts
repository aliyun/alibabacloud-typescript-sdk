// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnterpriseSnapshotPolicyRequestRetainRule extends $dara.Model {
  /**
   * @remarks
   * Maximum number of retained snapshots.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The time interval , valid value greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of time, valid values:
   * 
   * - DAYS
   * 
   * - WEEKS
   * 
   * @example
   * DAYS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

