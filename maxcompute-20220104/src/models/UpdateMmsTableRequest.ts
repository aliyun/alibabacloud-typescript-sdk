// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsTableRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the destination MaxCompute table. If you do not specify this parameter, the source table name is used.
   * 
   * @example
   * dst_table_name
   */
  dstName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute project.
   * 
   * @example
   * dst_project_name
   */
  dstProjectName?: string;
  /**
   * @remarks
   * The schema of the destination MaxCompute project.
   * 
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * The migration status.
   * 
   * @example
   * INIT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dstName: 'dstName',
      dstProjectName: 'dstProjectName',
      dstSchemaName: 'dstSchemaName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstName: 'string',
      dstProjectName: 'string',
      dstSchemaName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

