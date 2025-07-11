// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecSensitiveDomainStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of APIs that are involved.
   * 
   * @example
   * 10
   */
  apiCount?: number;
  /**
   * @remarks
   * The number of sites that are involved.
   * 
   * @example
   * 10
   */
  domainCount?: number;
  /**
   * @remarks
   * The code of the sensitive data.
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types.
   * 
   * @example
   * 10
   */
  sensitiveCode?: string;
  /**
   * @remarks
   * The sensitivity level of the sensitive data.Valid values:
   * 
   * * **S1**: low sensitivity.
   * * **S2**: moderate sensitivity.
   * * **S3**: high sensitivity.
   * 
   * @example
   * L3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The name of the sensitive data.
   * 
   * @example
   * 1002
   */
  sensitiveName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      domainCount: 'DomainCount',
      sensitiveCode: 'SensitiveCode',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveName: 'SensitiveName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'number',
      domainCount: 'number',
      sensitiveCode: 'string',
      sensitiveLevel: 'string',
      sensitiveName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecSensitiveDomainStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeApisecSensitiveDomainStatisticResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 56B40D30-4960-4F19-B7D5-2B1F***6CB70
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 27
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecSensitiveDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
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

