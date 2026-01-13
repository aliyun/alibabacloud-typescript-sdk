// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRecallManagementTableResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  recallManagementJobId?: string;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recallManagementJobId: 'RecallManagementJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recallManagementJobId: 'string',
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

