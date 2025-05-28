// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Data source type.
   * 
   * @example
   * mysql
   */
  dsType?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-******c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dsType: 'DsType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

