// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExportTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 12343
   */
  id?: number;
  /**
   * @remarks
   * The language. Valid values:
   * - en: English.
   * - zh: Chinese.
   * - ja: Japanese.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The current page number. Pages start from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The export scenario code. Valid values:
   * - intlCustomerQuotaRecord: Customer management, quota transaction export.
   * - intlExportUsageDeductHistory: Customer management, deduction detail export.
   * 
   * This parameter is required.
   * 
   * @example
   * intlExportUsageDeductHistory
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      language: 'Language',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      language: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sceneCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

