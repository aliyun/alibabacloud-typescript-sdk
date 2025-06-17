// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the sidecar container. You can call the [DescribeApplicationInstances](https://help.aliyun.com/document_detail/2834847.html) to obtain the ID.
   * 
   * @example
   * sidecar-test-01
   */
  containerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * ******-d700e680-aa4d-4ec1-afc2-6566b5ff4d7a-85d44d4bfc-*****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

