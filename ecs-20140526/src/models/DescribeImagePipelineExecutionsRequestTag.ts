// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePipelineExecutionsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the image creation task. Valid values of N: 1 to 20.
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the image creation task. Valid values of N: 1 to 20.
   * 
   * @example
   * null
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

