// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value that is returned in the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, find the ID on the **Cloud Production Studio** page. In the ApsaraVideo Live console, choose **Production Studio** > **Cloud Production Studio**.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The component ID. If you add a component to the production studio by calling the [AddCasterComponent](https://help.aliyun.com/document_detail/2848030.html) operation, use the ComponentId value that is returned in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 21926b36-7dd2-4fde-ae25-51b5bc8e****
   */
  componentId?: string;
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
      componentId: 'ComponentId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      componentId: 'string',
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

