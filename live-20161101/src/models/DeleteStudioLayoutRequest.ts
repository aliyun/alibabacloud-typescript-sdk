// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStudioLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value returned in the response.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, choose **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** to view the ID.
   * 
   * > The name of the production studio in the list is its ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b96****
   */
  casterId?: string;
  /**
   * @remarks
   * The layout ID. If you added the layout to the production studio by calling the [AddStudioLayout](https://help.aliyun.com/document_detail/2848062.html) operation, use the LayoutId value returned in the response.
   * 
   * This parameter is required.
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

