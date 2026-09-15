// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudVendorTrialConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the AccessKey pair.
   * 
   * > You can call [DescribeCloudVendorAccountAKList](~~DescribeCloudVendorAccountAKList~~) to obtain the AuthId.
   * > -
   * 
   * This parameter is required.
   * 
   * @example
   * 2363
   */
  authId?: number;
  /**
   * @remarks
   * The multi-cloud configuration information:
   * - *AWS*: Input parameters sqsQueueName and sqsRegion.
   * - *Tencent*: Input parameters kafkaUserName, kafkaBootstrapServers, and kafkaTopic.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"sqsRegion\\":\\"us-west-2\\",\\"sqsQueueName\\":\\"****\\"}
   */
  authInfo?: string;
  /**
   * @remarks
   * The cloud asset vendor. Valid values:
   * 
   * - **Tencent**: Tencent Cloud.
   * - **HUAWEICLOUD**: Huawei Cloud.
   * - **Azure**: Azure.
   * - **AWS**: AWS.
   * - **VOLCENGINE**: Volcengine.
   * - **google**: Google Cloud.
   * - **CHAITIN**: Chaitin Technology.
   * - **FORTINET**: Fortinet.
   * - **THREATBOOK**: ThreatBook.
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

