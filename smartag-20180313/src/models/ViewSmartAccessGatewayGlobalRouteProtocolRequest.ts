// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayGlobalRouteProtocolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the query is limited to cross-account Smart Access Gateway instances. Valid values:
   * 
   * - **false** (default): No.
   * 
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to retrieve region IDs.
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
   * The ID of the Smart Access Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-iv408aov6k7xxm****
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

