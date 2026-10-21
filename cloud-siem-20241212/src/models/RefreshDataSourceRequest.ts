// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The data source ID. This parameter is required in actual API calls. If it is not provided, the service returns a 400 error.
   * 
   * @example
   * ds-jl67vixpe1scwysgyu3x
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The language of the received messages. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * Note: This parameter is required in actual API calls. If it is not provided, the service returns a 400 error: "The specified Lang can not be empty." Pass the language code explicitly.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the data management center for threat analysis is located. Select the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: assets in the Chinese mainland and Hong Kong (China)
   * - ap-southeast-1: assets in regions outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator uses to switch to the view of another member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

