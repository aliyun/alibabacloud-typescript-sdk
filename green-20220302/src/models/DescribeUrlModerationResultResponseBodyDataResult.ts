// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlModerationResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The labels returned after the asynchronous URL moderation.
   * 
   * @example
   * sexual_url
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
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

