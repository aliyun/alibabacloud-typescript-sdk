// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeListStorageType extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * cloud_essd
   */
  text?: string;
  /**
   * @remarks
   * The real value.
   * 
   * @example
   * cloud_essd
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
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

