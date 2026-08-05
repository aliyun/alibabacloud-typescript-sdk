// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCastersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster operation](https://help.aliyun.com/document_detail/2848012.html), check the CasterId parameter returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, go to **ApsaraVideo Live console > Production Studios > Cloud Production Studio** to view the ID.
   * 
   * > - The production studio name in the production studio list on the Cloud Production Studio page is the production studio ID.
   * > - If this parameter is left empty, the merged data of all production studios is returned by default.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The name of the production studio.
   * 
   * @example
   * liveCaster****
   */
  casterName?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - 0: PrePaid (subscription).
   * 
   * - 1: PostPaid (pay-as-you-go).
   * 
   * @example
   * 0
   */
  chargeType?: number;
  /**
   * @remarks
   * The end time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2016-06-29T11:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The specification type of the production studio. Valid values:
   * 
   * - 1: general mode.
   * 
   * - 3: lightweight playlist mode.
   * 
   * - 4: virtual studio mode.
   * 
   * - 6: playlist mode (new playlist mode production studio).
   * 
   * @example
   * 1
   */
  normType?: string;
  /**
   * @remarks
   * Specifies whether to sort the production studios in ascending order by modification time.
   * 
   * Valid values: true (ascending order by modification time) | false (descending order by modification time, which is the default value).
   * 
   * > If this parameter is not specified, the default value is "false".
   * 
   * @example
   * false
   */
  orderByModifyAsc?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [What is a resource group](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-aekzw******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - 0: idle.  
   * 
   * - 1: streaming.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeCastersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      casterName: 'CasterName',
      chargeType: 'ChargeType',
      endTime: 'EndTime',
      normType: 'NormType',
      orderByModifyAsc: 'OrderByModifyAsc',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      casterName: 'string',
      chargeType: 'number',
      endTime: 'string',
      normType: 'string',
      orderByModifyAsc: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
      status: 'number',
      tag: { 'type': 'array', 'itemType': DescribeCastersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

