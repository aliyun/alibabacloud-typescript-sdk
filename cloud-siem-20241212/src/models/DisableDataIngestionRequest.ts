// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableDataIngestionRequest extends $dara.Model {
  /**
   * @remarks
   * The data ingestion ID.
   * 
   * @example
   * alibaba_cloud_sas_netstat_ingestion_173326*******
   */
  dataIngestionId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select the region of the management center based on the region where your asset is located. Valid values:
   * 
   * - cn-hangzhou: Your asset is in the Chinese mainland.
   * 
   * - ap-southeast-1: Your asset is outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member account that the administrator wants to switch to.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataIngestionId: 'DataIngestionId',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionId: 'string',
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

