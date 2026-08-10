// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI application. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
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
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

