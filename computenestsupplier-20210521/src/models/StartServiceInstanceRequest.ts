// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. Generate a value for this parameter from your client and make sure that the value is unique among different requests. ClientToken can contain only ASCII characters.
   * 
   * @example
   * 10CM943JP0EN9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the region where the service instance resides.
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
   * You can call the [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) operation to query the IDs of service instances.
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

