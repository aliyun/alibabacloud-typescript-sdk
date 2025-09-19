// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to query the IDs of check items.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  checkId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * >  You can call the [ListCloudAssetInstances](~~ListCloudAssetInstances~~) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      lang: 'string',
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

