// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingJobInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId parameter in the response.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, navigate to **ApsaraVideo Live console** > **Production Studios** > **Cloud Production Studio** to view the ID.
   * 
   * > - The name of the production studio in the production studio list on the Cloud Production Studio page is the production studio ID.
   * > - CasterId must be a production studio with NormType=6 (playlist mode). Using a production studio with other NormType values (such as 1 or 3) returns InvalidShowList.NotFound. You can filter by NormType=6 in the DescribeCasters response.
   * 
   * This parameter is required.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  casterId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the show to query.
   * >You can obtain the ShowId value from the response of the [AddShowIntoShowList](https://help.aliyun.com/document_detail/370861.html) operation.
   * 
   * @example
   * 72200b81-b761-4c10-842a-a0726d97****
   */
  showId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      showId: 'ShowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      ownerId: 'number',
      regionId: 'string',
      showId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

