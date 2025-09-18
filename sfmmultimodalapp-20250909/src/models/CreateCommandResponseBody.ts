// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommandResponseBody extends $dara.Model {
  /**
   * @example
   * 72893434
   */
  domainCode?: string;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @example
   * 3435676586
   */
  toolId?: string;
  static names(): { [key: string]: string } {
    return {
      domainCode: 'DomainCode',
      requestId: 'RequestId',
      toolId: 'ToolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCode: 'string',
      requestId: 'string',
      toolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

