// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetJobConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration type.
   * 
   * *   MultimodalIntelligentTag
   * *   MultimodalSemanticIndex
   * 
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 431514
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
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

