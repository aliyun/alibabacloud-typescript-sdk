// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterComponentsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, obtain the ID from the CasterId parameter in the response.
   * 
   * - If you created the production studio in the LIVE console, go to the Cloud Production Studio page by choosing **LIVE Console** > **Production Studio** > **Cloud Production Studio**.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The component ID. If you added the component by calling the [AddCasterComponent](https://help.aliyun.com/document_detail/2848030.html) operation, obtain the ID from the ComponentId parameter in the response.
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

