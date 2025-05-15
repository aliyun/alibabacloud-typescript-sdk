// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to authorize the service provider to perform O\\&M operations on the service instance.
   * 
   * @example
   * true
   */
  enableOperation?: boolean;
  /**
   * @remarks
   * The region ID.
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
   * You can call the [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) operation to obtain the ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17xxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enableOperation: 'EnableOperation',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOperation: 'boolean',
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

