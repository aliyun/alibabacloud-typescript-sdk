// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDTSIPRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the destination instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * >  If the destination instance is a self-managed database with a public IP address, you can set the parameter to **cn-hangzhou** or the ID of the closest region.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The ID of the region where the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the source instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * >  If the source instance is a self-managed database with a public IP address, you can set the parameter to **cn-hangzhou** or the ID of the closest region.
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

