// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value for this parameter. The value of ClientToken can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * Call the [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) operation to get the service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

