// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpAbroadCountryInfosResponseBodyAbroadInfos } from "./DescribeIpAbroadCountryInfosResponseBodyAbroadInfos";


export class DescribeIpAbroadCountryInfosResponseBody extends $dara.Model {
  abroadInfos?: DescribeIpAbroadCountryInfosResponseBodyAbroadInfos[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      abroadInfos: 'AbroadInfos',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abroadInfos: { 'type': 'array', 'itemType': DescribeIpAbroadCountryInfosResponseBodyAbroadInfos },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.abroadInfos)) {
      $dara.Model.validateArray(this.abroadInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

