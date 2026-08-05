// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStudioLayoutsRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId parameter value returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, go to **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** to view the ID.
   * 
   * > 
   * > - The production studio name in the production studio list on the Cloud Production Studio page is the production studio ID.
   * > - Only virtual studio production studios (NormType=4) are supported. If you pass in a production studio ID of another type, InvalidCaster.NotFound is returned. Call DescribeCasters and filter by NormType=4 to obtain the virtual studio production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b96****
   */
  casterId?: string;
  /**
   * @remarks
   * The layout ID.
   * Separate multiple layout IDs with commas (,). If this parameter is not specified, all layouts under the production studio are returned.
   * 
   * If you added virtual studio layout settings by calling the [AddStudioLayout](https://help.aliyun.com/document_detail/2848062.html) operation, check the LayoutId parameter value returned by the AddStudioLayout operation.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  layoutId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      layoutId: 'LayoutId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      layoutId: 'string',
      ownerId: 'number',
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

