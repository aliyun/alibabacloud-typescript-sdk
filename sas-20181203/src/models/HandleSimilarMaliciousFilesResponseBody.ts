// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSimilarMaliciousFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of alerts that are batch processed.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * The ID of the request. The China value is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * 8C376***AE74FB4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

