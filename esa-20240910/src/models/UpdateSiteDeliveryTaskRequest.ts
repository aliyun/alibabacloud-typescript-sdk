// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteDeliveryTaskRequest extends $dara.Model {
  businessType?: string;
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  fieldName?: string;
  filterVer?: string;
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      siteId: 'SiteId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
      siteId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

