// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures idempotence of the request. Generate a value from your client to ensure it is unique across different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters.
   * 
   * @example
   * 10CM943JP0EN9D51H
   */
  clientToken?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Service instance ID.
   * 
   * You can obtain the service instance ID by calling [ListServiceInstances - Query Service Instance List](https://help.aliyun.com/document_detail/396200.html).
   * 
   * @example
   * si-3a8f9a75da074f52b969
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

