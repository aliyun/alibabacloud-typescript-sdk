// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/69338.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the layout. If the layout was added by calling the [AddCasterLayout](https://help.aliyun.com/document_detail/60249.html) operation, check the value of the response parameter LayoutId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 21926b36-7dd2-4fde-ae25-51b5bc8e****
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

