// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulDefendCountStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of defended vulnerabilities.
   * 
   * @example
   * 10
   */
  raspDefendedCount?: number;
  /**
   * @remarks
   * The number of supported vulnerabilities.
   * 
   * @example
   * 100
   */
  raspDefensibleCount?: number;
  /**
   * @remarks
   * The request ID.
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

