// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudVendorTrialConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * >  [](#-describecloudvendoraccountaklist--authid)You can call the [DescribeCloudVendorAccountAKList](~~DescribeCloudVendorAccountAKList~~) operation to query the AccessKey ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2363
   */
  authId?: number;
  /**
   * @remarks
   * The configurations of the third-party cloud asset. Valid values:
   * 
   * *   *AWS*: Configure the sqsQueueName and sqsRegion parameters.
   * *   *Tencent*: Configure the kafkaUserName, kafkaBootstrapServers, and kafkaTopic parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"sqsRegion\\":\\"us-west-2\\",\\"sqsQueueName\\":\\"****\\"}
   */
  authInfo?: string;
  /**
   * @remarks
   * The service provider of the cloud asset. Valid values:
   * 
   * *   **Tencent**: Tencent Cloud.
   * *   **AWS**: Amazon Web Services (AWS).
   * 
   * This parameter is required.
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      authInfo: 'AuthInfo',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      authInfo: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

