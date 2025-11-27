// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **200**: success
   * *   **400**: client error
   * *   **401**: identity authentication failed
   * *   **404**: requested page not found
   * *   **500**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures extends $dara.Model {
  failures?: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures[];
  static names(): { [key: string]: string } {
    return {
      failures: 'Failures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failures: { 'type': 'array', 'itemType': PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures },
    };
  }

  validate() {
    if(Array.isArray(this.failures)) {
      $dara.Model.validateArray(this.failures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckCreateOrderForDeleteDBNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the failed order.
   */
  failures?: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures;
  /**
   * @remarks
   * The precheck result.
   * 
   * @example
   * True
   */
  preCheckResult?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B415BC6-FE84-5323-A255-42CF330DB99C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failures: 'Failures',
      preCheckResult: 'PreCheckResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failures: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures,
      preCheckResult: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.failures && typeof (this.failures as any).validate === 'function') {
      (this.failures as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

