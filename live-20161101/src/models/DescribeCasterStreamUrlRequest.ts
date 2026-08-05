// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterStreamUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. Make sure that the CasterId is correct.
   * 
   * - If you create a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, obtain the ID from the CasterId parameter in the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, go to the **ApsaraVideo Live console** and choose **Production Studio** > **Cloud Production Studio** to view the ID.
   * 
   * > The name of a production studio in the list on the Cloud Production Studio page is its ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
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

