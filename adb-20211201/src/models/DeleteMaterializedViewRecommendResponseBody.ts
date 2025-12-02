// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaterializedViewRecommendResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7B081A85-0568-5E54-82EF-6958C4A3D4B4
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

