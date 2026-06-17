// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcListLiteRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the region where the VPC resides.
   * 
   * > For more information about the regions that Cloud Firewall supports, see [Supported regions](https://help.aliyun.com/document_detail/195657.html).
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The source IP address of the requester.
   * 
   * @example
   * 58.34.174.194
   */
  sourceIp?: string;
  /**
   * @remarks
   * The instance ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  /**
   * @remarks
   * The instance name of the VPC.
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

