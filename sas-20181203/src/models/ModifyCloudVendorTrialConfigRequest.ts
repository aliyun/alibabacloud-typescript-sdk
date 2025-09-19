// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudVendorTrialConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the audit log configuration to be modified.
   * > The ID can be queried via [DescribeCloudVendorAccountAKList](~~DescribeCloudVendorAccountAKList~~).
   * 
   * This parameter is required.
   * 
   * @example
   * 23**
   */
  authId?: number;
  /**
   * @remarks
   * Enter the multi-cloud configuration information:
   * - AWS: parameters sqsQueueName, sqsRegion
   * - Tencent: parameters kafkaUserName, kafkaBootstrapServers, kafkaTopic
   * 
   * @example
   * {\\"sqsRegion\\":\\"us-west-2\\",\\"sqsQueueName\\":\\"****\\"}
   */
  authInfo?: string;
  /**
   * @remarks
   * Whether to delete this audit log configuration:
   * - true: Delete
   * - false: Do not delete
   * 
   * @example
   * true
   */
  deleteTrail?: boolean;
  /**
   * @remarks
   * Cloud asset vendor. Values:
   * 
   * - **Tencent**: Tencent Cloud
   * - **AWS**: AWS
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
      deleteTrail: 'DeleteTrail',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      authInfo: 'string',
      deleteTrail: 'boolean',
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

