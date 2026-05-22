// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserDeliveryTaskRequest extends $dara.Model {
  businessType?: string;
  details?: string;
  discardRate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  fieldName?: string;
  filterVer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      details: 'Details',
      discardRate: 'DiscardRate',
      fieldName: 'FieldName',
      filterVer: 'FilterVer',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      details: 'string',
      discardRate: 'number',
      fieldName: 'string',
      filterVer: 'string',
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

