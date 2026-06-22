// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTargetListByBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The China value is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * FBBEB173-1F43-505F-A876-C03ECD******
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

