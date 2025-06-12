// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeFileModerationResultResponseBodyDataPageResultImageResultLabelResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 25.0
   */
  confidence?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a title.
   */
  description?: string;
  /**
   * @remarks
   * The details of the labels.
   * 
   * @example
   * nonlabel
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

