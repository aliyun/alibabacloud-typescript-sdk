// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStudioLayoutsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio instance.
   * 
   * *   If you call the [CreateCaster](https://help.aliyun.com/document_detail/69338.html) operation to create a production studio instance, you can obtain the instance ID from the CasterId parameter in the response.
   * *   If you create a production studio instance in the ApsaraVideo Live console, perform the following operations to obtain the instance ID: Log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane. Then, view the instance ID on the **Production Studio Management** page.
   * 
   * >  The value displayed in the Name column for an instance on the Production Studio Management page is the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b96****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the layout.
   * 
   * You can specify multiple layout IDs and separate them with commas (,). If you leave this parameter empty, all layouts of the production studio are returned.
   * 
   * If you call the [AddStudioLayout](https://help.aliyun.com/document_detail/215388.html) operation to configure a layout for a virtual studio, you can obtain the ID of the layout from the LayoutId parameter in the response.
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

