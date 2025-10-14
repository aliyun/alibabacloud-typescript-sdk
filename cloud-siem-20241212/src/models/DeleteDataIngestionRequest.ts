// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataIngestionRequest extends $dara.Model {
  /**
   * @example
   * alibaba_cloud_sas_netstat_ingestion_173326*******。
   */
  dataIngestionId?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
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

