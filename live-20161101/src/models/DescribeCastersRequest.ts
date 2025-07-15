// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCastersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848012.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the ApsaraVideo Live console and click Production Studios in the left-side navigation pane.
   * 
   * > 
   * 
   * *   You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * *   If you leave this parameter empty, the data of all production studios is returned.
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
   * *   0: the subscription billing method
   * *   1: the pay-as-you-go billing method
   * 
   * @example
   * 0
   */
  chargeType?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-06-29T11:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the production studio. Valid values:
   * 
   * *   1: general mode
   * *   3: lightweight carousel playback mode
   * *   4: virtual studio
   * *   6: playlist mode
   * 
   * @example
   * 1
   */
  normType?: string;
  /**
   * @remarks
   * Specifies whether to sort the production studios in ascending order based on the modification time.
   * 
   * >  If you leave this parameter empty, the default value is used. Default value: false.
   * 
   * @example
   * false
   */
  orderByModifyAsc?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of templates to return on each page. If you leave this parameter empty, the default value is used. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-aekzw******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the production studio. Valid values:
   * 
   * *   0: idle
   * *   1: streaming
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The tags.
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

