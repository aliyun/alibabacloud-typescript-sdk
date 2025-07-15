// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCasterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the new production studio.
   * 
   * This parameter is required.
   * 
   * @example
   * caster001
   */
  casterName?: string;
  /**
   * @remarks
   * The user-generated request token. This token is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  clientToken?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the original production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  srcCasterId?: string;
  static names(): { [key: string]: string } {
    return {
      casterName: 'CasterName',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      srcCasterId: 'SrcCasterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterName: 'string',
      clientToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      srcCasterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

