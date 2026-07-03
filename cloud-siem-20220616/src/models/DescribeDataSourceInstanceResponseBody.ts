// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams extends $dara.Model {
  /**
   * @remarks
   * The parameter code.
   * 
   * @example
   * region_code
   */
  paraCode?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * ap-guangzhou
   */
  paraValue?: string;
  static names(): { [key: string]: string } {
    return {
      paraCode: 'ParaCode',
      paraValue: 'ParaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paraCode: 'string',
      paraValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The code for the multicloud environment. Valid values:
   * 
   * - qcloud: Tencent Cloud.
   * 
   * - aliyun: Alibaba Cloud.
   * 
   * - hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The ID of the data source. The threat analysis service generates the ID by calculating the MD5 hash of specific parameters.
   * 
   * @example
   * 220ba97c9d1fdb0b9c7e8c7ca328d7ea
   */
  dataSourceInstanceId?: string;
  /**
   * @remarks
   * The list of detailed parameters for the data source.
   */
  dataSourceInstanceParams?: DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      cloudCode: 'CloudCode',
      dataSourceInstanceId: 'DataSourceInstanceId',
      dataSourceInstanceParams: 'DataSourceInstanceParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      cloudCode: 'string',
      dataSourceInstanceId: 'string',
      dataSourceInstanceParams: { 'type': 'array', 'itemType': DescribeDataSourceInstanceResponseBodyDataDataSourceInstanceParams },
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceInstanceParams)) {
      $dara.Model.validateArray(this.dataSourceInstanceParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDataSourceInstanceResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDataSourceInstanceResponseBodyData,
      requestId: 'string',
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

