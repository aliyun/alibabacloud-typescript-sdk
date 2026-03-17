// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayWanSnatRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only the SAG instances that belong to another Alibaba Cloud account. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the SAG instance belongs.
   * 
   * @example
   * 109790620697****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway (SAG) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-jwbtsyzom0ol4v****
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4dk****
   */
  sagSn?: string;
  /**
   * @remarks
   * Specifies whether to enable SNAT. Valid values:
   * 
   * *   **1**: enables SNAT
   * *   **0**: disables SNAT
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  snat?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      snat: 'Snat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      snat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

