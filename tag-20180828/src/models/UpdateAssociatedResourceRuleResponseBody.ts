// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAssociatedResourceRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 94E16BB6-3FB6-1297-B5B2-ED2250F437CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

