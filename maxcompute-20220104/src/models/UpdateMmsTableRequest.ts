// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsTableRequest extends $dara.Model {
  /**
   * @example
   * dst_table_name
   */
  dstName?: string;
  /**
   * @example
   * dst_project_name
   */
  dstProjectName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
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

