// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExportTasksRequest extends $dara.Model {
  /**
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * intlExportUsageDeductHistory
   */
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

