// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterVideoResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the value of CasterId that is returned.
   * 
   * - If you create the production studio in the LIVE console, go to the Cloud Production Studio page to view the ID. To go to the page, choose **LIVE Console** > **Production Studio** > **Cloud Production Studio**.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
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

