// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * contraband
   */
  label?: string;
  /**
   * @remarks
   * The number of times that the label is matched.
   * 
   * @example
   * 1
   */
  labelSum?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      labelSum: 'LabelSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      labelSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

