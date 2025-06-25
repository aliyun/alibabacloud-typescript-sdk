// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableInstancePublicAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host whose Internet access is enabled.
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
   * D47B5043-FDD6-4FBE-976E-5FC67A23578F
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

