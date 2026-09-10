// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergTableMetadata } from "./IcebergTableMetadata";


export class IcebergTable extends $dara.Model {
  /**
   * @remarks
   * The table creation time.
   * 
   * @example
   * 1747120676378
   */
  createdAt?: number;
  /**
   * @remarks
   * The table creator.
   * 
   * @example
   * acs:ram::1045689747920334:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The metadata of the table.
   */
  icebergTableMetadata?: IcebergTableMetadata;
  /**
   * @remarks
   * The table UUID.
   * 
   * @example
   * tbl-424fc31c-4876-4df5-97a5-c78f3046e739
   */
  id?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table1
   */
  name?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * acs:ram::1045689747920334:root
   */
  owner?: string;
  /**
   * @remarks
   * The table URI.
   * 
   * @example
   * oss://clg-iceberg-bcc387be9d24490da5f194bbaf990906/ns-b314a3c3-dff5-4e30-8ba2-0493a60566c7.db/iceberg-tbl-56539259-1879-4d6d-bd6e-d1ddb3364cc9
   */
  path?: string;
  /**
   * @remarks
   * The time when the table was last updated.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who last updated the table.
   * 
   * @example
   * acs:ram::1045689747920334:root
   */
  updatedBy?: string;
  /**
   * @remarks
   * The version of the table.
   * 
   * @example
   * 0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      icebergTableMetadata: 'icebergTableMetadata',
      id: 'id',
      name: 'name',
      owner: 'owner',
      path: 'path',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      icebergTableMetadata: IcebergTableMetadata,
      id: 'string',
      name: 'string',
      owner: 'string',
      path: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.icebergTableMetadata && typeof (this.icebergTableMetadata as any).validate === 'function') {
      (this.icebergTableMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

