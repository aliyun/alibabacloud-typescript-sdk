// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcListLiteRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * >  For more information about Cloud Firewall supported regions, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 58.34.174.194
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-shanghai
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionNo: 'RegionNo',
      sourceIp: 'SourceIp',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionNo: 'string',
      sourceIp: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

