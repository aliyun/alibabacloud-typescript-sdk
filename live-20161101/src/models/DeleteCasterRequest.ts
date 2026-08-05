// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. Make sure that you specify the correct CasterId.
   * 
   * - If you created a production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, obtain the CasterId from the response.
   * 
   * - If you created a production studio in the ApsaraVideo Live console, go to the **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** page to view the ID.
   * 
   * > On the Cloud Production Studio page, the name of a production studio in the list is its ID.
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
   * The region ID.
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

