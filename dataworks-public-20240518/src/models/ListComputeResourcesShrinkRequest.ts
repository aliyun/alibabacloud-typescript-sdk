// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeResourcesShrinkRequest extends $dara.Model {
  envType?: string;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  projectId?: number;
  sortBy?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

