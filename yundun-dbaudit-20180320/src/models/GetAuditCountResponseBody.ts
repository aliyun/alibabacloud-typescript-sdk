// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditCountResponseBody extends $dara.Model {
  /**
   * @example
   * E6A08A8A-F962-4FAD-AF0C-86B393E1F9C1
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  riskCount?: number;
  /**
   * @example
   * 2000
   */
  sessionCount?: number;
  /**
   * @example
   * 100000
   */
  sqlCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskCount: 'RiskCount',
      sessionCount: 'SessionCount',
      sqlCount: 'SqlCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskCount: 'number',
      sessionCount: 'number',
      sqlCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

