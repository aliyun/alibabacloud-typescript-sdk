// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterVideoResourceRequest extends $dara.Model {
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
   * 80787064-1c94-4dc1-85ce-9409960a****
   */
  casterId?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The resource ID. If the input source was added by calling the AddCasterVideoResource operation, check the value of the response parameter ResourceId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 05ab713c-676e-49c0-96ce-cc408da1****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

