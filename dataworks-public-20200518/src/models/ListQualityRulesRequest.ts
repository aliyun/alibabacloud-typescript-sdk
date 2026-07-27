// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the partition expression. Call the [GetQualityEntity](https://help.aliyun.com/document_detail/174003.html) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  entityId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default: 10. Maximum: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source. You can find this name on the Data Source Configuration page.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

