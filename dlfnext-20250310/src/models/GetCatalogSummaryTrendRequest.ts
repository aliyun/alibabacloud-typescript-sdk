// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogSummaryTrendRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
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

