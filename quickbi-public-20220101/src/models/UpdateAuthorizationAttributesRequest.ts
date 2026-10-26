// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthorizationAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The edit permission type. Valid values:
   * 
   * - 0: Private.
   * - 11: All workspace members except guests. For data forms, datasets, and data sources, this value indicates all workspace developers.
   * - 12: Specified members. For data forms, datasets, and data sources, this value indicates specified developers.
   * 
   * @example
   * 0
   */
  editPermissionType?: number;
  /**
   * @remarks
   * The ID of the resource to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * al*************7ufv
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - dashboard: dashboard.
   * - screen: data visualization.
   * - report: workbook.
   * - ANALYSIS: ad hoc analysis.
   * - dashboardOfflineQuery: self-service data retrieval.
   * - dataForm: data form.
   * - cube: dataset.
   * - datasource: data source.
   * 
   * This parameter is required.
   * 
   * @example
   * cube
   */
  resourceType?: string;
  /**
   * @remarks
   * The usage permission type for datasets and data sources. Valid values:
   * 
   * - 1: All workspace members except guests.
   * - 2: Specified members.
   * 
   * @example
   * 1
   */
  usePermissionType?: number;
  static names(): { [key: string]: string } {
    return {
      editPermissionType: 'EditPermissionType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      usePermissionType: 'UsePermissionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editPermissionType: 'number',
      resourceId: 'string',
      resourceType: 'string',
      usePermissionType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

