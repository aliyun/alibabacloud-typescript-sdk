// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterStreamUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * If you create a production studio through the [CreateCaster](~~69338#doc-api-live-CreateCaster~~) interface, check the value of the CasterId parameter in the response.
   * 
   * If you create a production studio through the ApsaraVideo Live Console, log in to the console, then check the ID of the production studio through the following path:
   * 
   * Production Studios > Production Studio Management
   * 
   * >  The CasterId is reflected in the Name column on the Production Studio Management page.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  ownerId?: number;
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

