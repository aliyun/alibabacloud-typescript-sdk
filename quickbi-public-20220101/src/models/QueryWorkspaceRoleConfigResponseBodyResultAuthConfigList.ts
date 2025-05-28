// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission scope.
   */
  actionAuthKeys?: string[];
  /**
   * @remarks
   * Permission type:
   * - portal_create: Data Portal
   * - dashboard_create: Dashboard
   * - report_create: Spreadsheet
   * - screen_create: Data Screen
   * - analysis: Ad-hoc Analysis
   * - offline_download: Self-service Data Retrieval
   * - data_form: Data Entry
   * - quick_etl: Data Preparation
   * - cube: Dataset
   * - datasource: Data Source
   * 
   * @example
   * portal_create
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      actionAuthKeys: 'ActionAuthKeys',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionAuthKeys: { 'type': 'array', 'itemType': 'string' },
      authKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionAuthKeys)) {
      $dara.Model.validateArray(this.actionAuthKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

