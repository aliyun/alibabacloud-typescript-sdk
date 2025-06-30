// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1EBF271
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

