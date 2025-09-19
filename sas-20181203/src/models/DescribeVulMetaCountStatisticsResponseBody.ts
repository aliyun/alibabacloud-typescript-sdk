// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulMetaCountStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of application vulnerabilities.
   * 
   * @example
   * 0
   */
  appCount?: number;
  /**
   * @remarks
   * The number of Linux software vulnerabilities.
   * 
   * @example
   * 10
   */
  cveCount?: number;
  /**
   * @remarks
   * The number of vulnerabilities that can be defended by the application protection feature.
   * 
   * @example
   * 10
   */
  raspDefendCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 571B2642-BF51-5BDD-906B-D2340DB9****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of Windows system vulnerabilities.
   * 
   * @example
   * 10
   */
  sysCount?: number;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      cveCount: 'CveCount',
      raspDefendCount: 'RaspDefendCount',
      requestId: 'RequestId',
      sysCount: 'SysCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      cveCount: 'number',
      raspDefendCount: 'number',
      requestId: 'string',
      sysCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

