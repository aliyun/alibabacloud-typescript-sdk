// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAttackProtectionCountResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  blockHighCount?: number;
  /**
   * @example
   * 0
   */
  blockLowCount?: number;
  /**
   * @example
   * 0
   */
  blockMediumCount?: number;
  /**
   * @example
   * 0
   */
  monitorHighCount?: number;
  /**
   * @example
   * 0
   */
  monitorLowCount?: number;
  /**
   * @example
   * 0
   */
  monitorMediumCount?: number;
  /**
   * @example
   * 400E8C8C-ADD3-5F25-9038-BDC057841D20
   */
  requestId?: string;
  /**
   * @example
   * 61134279
   */
  totalRequestCount?: number;
  static names(): { [key: string]: string } {
    return {
      blockHighCount: 'BlockHighCount',
      blockLowCount: 'BlockLowCount',
      blockMediumCount: 'BlockMediumCount',
      monitorHighCount: 'MonitorHighCount',
      monitorLowCount: 'MonitorLowCount',
      monitorMediumCount: 'MonitorMediumCount',
      requestId: 'RequestId',
      totalRequestCount: 'TotalRequestCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockHighCount: 'number',
      blockLowCount: 'number',
      blockMediumCount: 'number',
      monitorHighCount: 'number',
      monitorLowCount: 'number',
      monitorMediumCount: 'number',
      requestId: 'string',
      totalRequestCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

