// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PlayChoosenShowRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId parameter in the response.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, navigate to **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** to view the production studio name.
   * 
   * > - The production studio name in the production studio list on the Cloud Production Studio page is the production studio ID.
   * > - The production studio must be in the running (Status=1) state. Otherwise, the IncorrectCasterStatus error is returned. For a production studio in the idle state, call StartCaster to start the production studio first.
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
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the show to switch to.
   * >You can obtain the ShowId value from the response parameters of the [AddShowIntoShowList](https://help.aliyun.com/document_detail/2848051.html) or [DescribeShowList](https://help.aliyun.com/document_detail/2848054.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
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

