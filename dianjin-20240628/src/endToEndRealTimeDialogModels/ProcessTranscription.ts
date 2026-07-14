// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessTranscription extends $dara.Model {
  dataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  data?: number[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      data: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

