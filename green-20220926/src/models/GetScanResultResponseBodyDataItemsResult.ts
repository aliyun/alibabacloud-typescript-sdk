// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanResultResponseBodyDataItemsResult extends $dara.Model {
  /**
   * @example
   * 50.0
   */
  confidence?: string;
  description?: string;
  /**
   * @example
   * politics
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
      confidence: 'string',
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

