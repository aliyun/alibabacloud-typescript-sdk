// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityResultsByEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the business date range. The value must be in the `yyyy-MM-dd HH:mm:ss` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-21 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the partition expression. You can call the [GetQualityEntity](https://help.aliyun.com/document_detail/174003.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15232
   */
  entityId?: number;
  /**
   * @remarks
   * The page number to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. The default is 10, and the maximum is 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
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
  /**
   * @remarks
   * The start of the business date range. The value must be in the `yyyy-MM-dd HH:mm:ss` format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-20 00:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      entityId: 'EntityId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      entityId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectName: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

