// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      searchDatasetEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: CreateDatasetResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDatasetResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

