// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulDefendCountStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of vulnerabilities that have been defended against.
   * 
   * @example
   * 10
   */
  raspDefendedCount?: number;
  /**
   * @remarks
   * The number of vulnerabilities that can be defended against.
   * 
   * @example
   * 100
   */
  raspDefensibleCount?: number;
  /**
   * @remarks
   * The request ID. China Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      raspDefendedCount: 'RaspDefendedCount',
      raspDefensibleCount: 'RaspDefensibleCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      raspDefendedCount: 'number',
      raspDefensibleCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

