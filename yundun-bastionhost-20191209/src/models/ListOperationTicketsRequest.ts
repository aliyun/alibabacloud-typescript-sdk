// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationTicketsRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the asset for which the O\\&M request is pending approval. This parameter supports exact match searches.
   * 
   * @example
   * 10.167.XX.XX
   */
  assetAddress?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number for a paged query. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page of a paged query.<br> The maximum value for the PageSize parameter is 1000. The default value is 20. If you leave this parameter empty, 20 entries are returned.<br><br>
   * 
   * > We recommend that you specify this parameter.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetAddress: 'AssetAddress',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetAddress: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

