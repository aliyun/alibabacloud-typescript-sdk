// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecallManagementServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recall management service ID.
   * 
   * @example
   * 1
   */
  recallManagementServiceId?: string;
  /**
   * @remarks
   * The recall management service version ID.
   * 
   * @example
   * 3
   */
  recallManagementServiceVersionId?: string;
  /**
   * @remarks
   * **The request ID.**
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recallManagementServiceId: 'RecallManagementServiceId',
      recallManagementServiceVersionId: 'RecallManagementServiceVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recallManagementServiceId: 'string',
      recallManagementServiceVersionId: 'string',
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

