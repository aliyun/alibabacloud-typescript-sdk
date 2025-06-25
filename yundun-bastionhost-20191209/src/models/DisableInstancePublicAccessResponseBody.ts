// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableInstancePublicAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host whose Internet access is disabled.
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
   * 76FAAF15-D3A3-4099-9941-FC408D9FDB4C
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

