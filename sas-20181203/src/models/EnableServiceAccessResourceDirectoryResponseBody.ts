// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableServiceAccessResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 52870893-48A7-5A9E-9E05-6253E5B6****
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

