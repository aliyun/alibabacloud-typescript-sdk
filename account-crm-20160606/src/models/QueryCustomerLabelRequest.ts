// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomerLabelRequest extends $dara.Model {
  labelSeries?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  PK?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      labelSeries: 'LabelSeries',
      PK: 'PK',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSeries: 'string',
      PK: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

