// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVulWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 9FBC6E47-7508-58C9-9E76-528E118CB1CC
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

