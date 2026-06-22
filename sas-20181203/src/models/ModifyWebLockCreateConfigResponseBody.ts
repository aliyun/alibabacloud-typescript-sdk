// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockCreateConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the protected directory configuration.
   * 
   * @example
   * 1404656
   */
  configId?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * D9354C1A-D709-4873-9AAE-41513327B247
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
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

