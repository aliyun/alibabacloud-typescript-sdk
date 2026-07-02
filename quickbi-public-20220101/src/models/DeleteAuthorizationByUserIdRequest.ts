// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAuthorizationByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The Quick BI user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc4b***94fa4
   */
  qbiUserId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * al*************7ufv
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * - dashboard: dashboard
   * - report: workbook
   * - dashboardOfflineQuery: self-service data retrieval
   * - cube: dataset
   * - datasource: data source
   * - screen: data dashboard
   * - ANALYSIS: ad hoc analysis
   * - dataForm: data entry form
   * 
   * This parameter is required.
   * 
   * @example
   * report
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      qbiUserId: 'QbiUserId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qbiUserId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

