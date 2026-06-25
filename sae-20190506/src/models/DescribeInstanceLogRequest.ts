// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the sidecar container. Call the [ListApplicationInstances](https://help.aliyun.com/document_detail/2834847.html) operation to obtain this ID.
   * 
   * @example
   * sidecar-test-01
   */
  containerId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ******-d700e680-aa4d-4ec1-afc2-6566b5ff4d7a-85d44d4bfc-*****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to view the log of the instance from before its last restart. Note: This parameter is active only if the instance was restarted.
   * 
   * @example
   * false
   */
  previous?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      instanceId: 'InstanceId',
      previous: 'Previous',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      instanceId: 'string',
      previous: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

