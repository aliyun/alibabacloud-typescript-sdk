// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityIpGroupResponseBodySecurityIpGroup extends $dara.Model {
  /**
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @example
   * paytest
   */
  securityIpGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

