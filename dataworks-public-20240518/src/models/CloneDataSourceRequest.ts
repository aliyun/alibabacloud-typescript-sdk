// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the destination data source The name can contain letters, digits, and underscores (_), and must start with a letter. It cannot exceed 60 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * demo_holo_datasource
   */
  cloneDataSourceName?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 16036
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      cloneDataSourceName: 'CloneDataSourceName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneDataSourceName: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

