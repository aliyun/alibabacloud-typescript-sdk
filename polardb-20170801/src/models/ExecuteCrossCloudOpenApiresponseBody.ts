// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteCrossCloudOpenAPIResponseBody extends $dara.Model {
  /**
   * @example
   * {"ProxyData": "{\\"DBCluster\\":[{\\"AliyunRegionId\\":\\"cn-beijing\\",\\"CloudProvider\\":\\"huawei\\",\\"CreateTime\\":\\"2024-11-25T14:49:10Z\\",\\"CrossCloudRegionId\\":\\"cn-east-3\\",\\"DBClusterDescription\\":\\"\\",\\"DBClusterId\\":\\"pc-2zej3qvf5fg******\\",\\"DBClusterStatus\\":\\"Creating\\",\\"DBType\\":\\"polardb_mysql\\",\\"DBVersion\\":\\"8.0\\",\\"ProjectId\\":\\"pj-bp1m8oh1k68******\\"},{\\"AliyunRegionId\\":\\"cn-beijing\\",\\"CloudProvider\\":\\"huawei\\",\\"CreateTime\\":\\"2024-11-25T14:59:10Z\\",\\"CrossCloudRegionId\\":\\"cn-east-3\\",\\"DBClusterDescription\\":\\"\\",\\"DBClusterId\\":\\"pc-2ze29994l17******\\",\\"DBClusterStatus\\":\\"Running\\",\\"DBType\\":\\"polardb_mysql\\",\\"DBVersion\\":\\"8.0\\",\\"ProjectId\\":\\"pj-bp1m8oh1k68******\\"}]}","RequestId": "E56531A4-E552-40BA-9C58-137B80******"}
   */
  proxyData?: string;
  /**
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      proxyData: 'ProxyData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyData: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

