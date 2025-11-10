// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataLiteTopicLagMapValue extends $dara.Model {
  /**
   * @example
   * 300
   */
  readyCount?: number;
  /**
   * @example
   * 30
   */
  deliveryDuration?: number;
  static names(): { [key: string]: string } {
    return {
      readyCount: 'readyCount',
      deliveryDuration: 'deliveryDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readyCount: 'number',
      deliveryDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

