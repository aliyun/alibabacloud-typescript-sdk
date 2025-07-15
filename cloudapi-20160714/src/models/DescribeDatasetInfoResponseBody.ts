// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatasetInfoResponseBodyDatasetInfo extends $dara.Model {
  /**
   * @remarks
   * The creation time (UTC) of the dataset.
   * 
   * @example
   * 2022-09-21T12:58:43Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * 62b91a790a693238********
   */
  datasetId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * DatasetName
   */
  datasetName?: string;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * *   JWT_BLOCKING: a JSON Web Token (JWT) blacklist
   * *   IP_WHITELIST_CIDR : an IP address whitelist
   * *   PARAMETER_ACCESS : parameter-based access control
   * 
   * @example
   * JWT_BLOCKING
   */
  datasetType?: string;
  description?: string;
  /**
   * @remarks
   * The last modification time (UTC) of the dataset.
   * 
   * @example
   * 2022-09-21T12:58:43Z
   */
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      datasetId: 'string',
      datasetName: 'string',
      datasetType: 'string',
      description: 'string',
      modifiedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatasetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset info.
   */
  datasetInfo?: DescribeDatasetInfoResponseBodyDatasetInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2C8F75E-EE84-5C64-960F-45C8********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetInfo: 'DatasetInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetInfo: DescribeDatasetInfoResponseBodyDatasetInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.datasetInfo && typeof (this.datasetInfo as any).validate === 'function') {
      (this.datasetInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

