// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableInstancePublicAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Bastionhost instance for which public network access is enabled.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID. The China Chinese system generates a unique ID for each request. You can use the ID to troubleshoot issues.
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

