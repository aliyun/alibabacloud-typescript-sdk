// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetConsumerApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      gwClusterId: 'GwClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      gwClusterId: 'string',
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

