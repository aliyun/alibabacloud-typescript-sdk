// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayDnsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only Smart Access Gateway instances that belong to other accounts. Valid values:
   * 
   * - **false** (default): no.
   * 
   * - **true**: yes.
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the Smart Access Gateway instance belongs.
   * 
   * @example
   * 109790620697****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The Smart Access Gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-sv487b7lno6go5****
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4ea****
   */
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

