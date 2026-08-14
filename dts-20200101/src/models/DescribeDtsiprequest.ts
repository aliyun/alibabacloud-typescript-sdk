// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDTSIPRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the destination instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the destination instance is a self-managed database that has a public IP address, you can specify **ap-southeast-1** or the region ID that is geographically closest to the self-managed database.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The region in which the DTS task instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the source instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * > If the source instance is a self-managed database that has a public IP address, you can specify **ap-southeast-1** or the region ID that is geographically closest to the self-managed database.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  sourceEndpointRegion?: string;
  static names(): { [key: string]: string } {
    return {
      destinationEndpointRegion: 'DestinationEndpointRegion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceEndpointRegion: 'SourceEndpointRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationEndpointRegion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceEndpointRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

