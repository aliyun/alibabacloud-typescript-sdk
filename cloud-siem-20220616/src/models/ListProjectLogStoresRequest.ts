// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectLogStoresRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Specify the region based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Assets are in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The code of the log to query.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The code of the product to query.
   * 
   * This parameter is required.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 123XXXXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sourceLogCode: 'SourceLogCode',
      sourceProdCode: 'SourceProdCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sourceLogCode: 'string',
      sourceProdCode: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

