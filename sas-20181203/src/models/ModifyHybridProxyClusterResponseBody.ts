// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridProxyClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 8B4B6E6D-B0B0-5F05-A14E-82917D9648EE
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

