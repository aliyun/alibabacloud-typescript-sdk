// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomerLabelRequest extends $dara.Model {
  endtime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  labelSeries?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  labelTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  organization?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  PK?: number;
  startTime?: string;
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      endtime: 'Endtime',
      labelSeries: 'LabelSeries',
      labelTypes: 'LabelTypes',
      organization: 'Organization',
      PK: 'PK',
      startTime: 'StartTime',
      token: 'Token',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endtime: 'string',
      labelSeries: 'string',
      labelTypes: { 'type': 'array', 'itemType': 'string' },
      organization: 'string',
      PK: 'number',
      startTime: 'string',
      token: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelTypes)) {
      $dara.Model.validateArray(this.labelTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

