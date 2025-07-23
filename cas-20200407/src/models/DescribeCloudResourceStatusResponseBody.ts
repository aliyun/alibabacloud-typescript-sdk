// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * aliyun
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * OSS
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The total number of cloud resources on which certificates are deployed.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudName: 'string',
      cloudProduct: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudResourceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeCloudResourceStatusResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09470F19-CEE8-5C63-BF2C-02B5E3F07A17
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
      data: { 'type': 'array', 'itemType': DescribeCloudResourceStatusResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

