// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserMetricsEndpoint } from "./UserMetricsEndpoint";


export class UpdateDatasetVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The number of dataset files.
   * 
   * @example
   * 100
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the space occupied by dataset files. Unit: bytes.
   * 
   * @example
   * 100000
   */
  dataSize?: number;
  /**
   * @remarks
   * DatasetTaskRamRole
   * 
   * @example
   * acs:ram::1234567890123456:role/role-name
   */
  datasetTaskRamRole?: string;
  /**
   * @remarks
   * The custom description of the dataset, which is used to distinguish different datasets.
   * 
   * @example
   * This is a description of a dataset version.
   */
  description?: string;
  /**
   * @remarks
   * The extended field in JsonString format. When DLC uses the dataset, you can specify the default mount path of the dataset by configuring the mountPath field.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  userMetricsEndpoints?: UserMetricsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      datasetTaskRamRole: 'DatasetTaskRamRole',
      description: 'Description',
      options: 'Options',
      userMetricsEndpoints: 'UserMetricsEndpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      datasetTaskRamRole: 'string',
      description: 'string',
      options: 'string',
      userMetricsEndpoints: { 'type': 'array', 'itemType': UserMetricsEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.userMetricsEndpoints)) {
      $dara.Model.validateArray(this.userMetricsEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

