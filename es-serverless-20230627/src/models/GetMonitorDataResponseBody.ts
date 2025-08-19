// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonitorDataResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {
   *     "1689480600":28676235.104761902
   * }
   */
  dps?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  integrity?: number;
  /**
   * @example
   * 1689566839447
   */
  messageWatermark?: number;
  /**
   * @example
   * elasticsearch-server.logic_cpu.cpu
   */
  metric?: string;
  /**
   * @example
   * 172455913.18935508
   */
  summary?: number;
  /**
   * @example
   * {
   *                 "indexName":"test"
   *             }
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dps: 'dps',
      integrity: 'integrity',
      messageWatermark: 'messageWatermark',
      metric: 'metric',
      summary: 'summary',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrity: 'number',
      messageWatermark: 'number',
      metric: 'string',
      summary: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.dps) {
      $dara.Model.validateMap(this.dps);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorDataResponseBody extends $dara.Model {
  /**
   * @example
   * InternalServerError
   */
  code?: string;
  /**
   * @example
   * internal server error
   */
  message?: string;
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetMonitorDataResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetMonitorDataResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

