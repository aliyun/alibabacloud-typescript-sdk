// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityResultsResponseBodyPagingInfoDataQualityResultsDetails extends $dara.Model {
  /**
   * @remarks
   * The value that is used for comparison with the threshold.
   * 
   * @example
   * 100.0
   */
  checkedValue?: string;
  /**
   * @remarks
   * The value that is calculated based on sample data. The value serves as a baseline value during the calculation of the value of the CheckedValue parameter.
   * 
   * @example
   * 0.0
   */
  referencedValue?: string;
  /**
   * @remarks
   * The comparison result between the value of CheckedValue and the threshold. Valid values:
   * 
   * *   Error
   * *   Passed
   * *   Warned
   * *   Critical
   * 
   * @example
   * PASSED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkedValue: 'CheckedValue',
      referencedValue: 'ReferencedValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedValue: 'string',
      referencedValue: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

