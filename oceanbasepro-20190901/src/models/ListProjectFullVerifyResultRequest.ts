// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectFullVerifyResultRequest extends $dara.Model {
  destSchemas?: string[];
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
  sourceSchemas?: string[];
  /**
   * @example
   * FINISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destSchemas: 'DestSchemas',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sourceSchemas: 'SourceSchemas',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destSchemas: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sourceSchemas: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destSchemas)) {
      $dara.Model.validateArray(this.destSchemas);
    }
    if(Array.isArray(this.sourceSchemas)) {
      $dara.Model.validateArray(this.sourceSchemas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

