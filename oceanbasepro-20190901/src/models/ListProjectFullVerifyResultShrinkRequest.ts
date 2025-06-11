// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectFullVerifyResultShrinkRequest extends $dara.Model {
  destSchemasShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np_4w5abs****
   */
  projectId?: string;
  sourceSchemasShrink?: string;
  /**
   * @example
   * FINISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destSchemasShrink: 'DestSchemas',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sourceSchemasShrink: 'SourceSchemas',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destSchemasShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sourceSchemasShrink: 'string',
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

