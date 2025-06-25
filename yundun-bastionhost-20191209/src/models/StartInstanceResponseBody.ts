// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host that you enable.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0F85AE0A-6A87-48F3-A0C7-90B998788A36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

