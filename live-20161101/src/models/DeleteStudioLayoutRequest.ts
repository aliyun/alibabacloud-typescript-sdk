// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStudioLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b96****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the layout. If the layout was added by calling the [AddStudioLayout](https://help.aliyun.com/document_detail/2848062.html) operation, check the value of the response parameter LayoutId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  layoutId?: string;
  ownerId?: number;
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

