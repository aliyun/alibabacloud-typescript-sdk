// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @example
   * 25.0
   */
  confidence?: number;
  description?: string;
  /**
   * @example
   * political_n
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

