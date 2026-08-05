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
   * A client-generated token that ensures the idempotence of the request.
   * 
   * Generate a unique value for this parameter for each request. The token can contain a maximum of 64 ASCII characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  clientToken?: string;
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
   * The ID of the production studio to copy.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value that is returned.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, go to **ApsaraVideo Live console** > **Production Studio** > **Cloud Production Studio** to view the production studio name.
   * 
   * > The name of a production studio on the Cloud Production Studio page is its production studio ID.
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

