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

