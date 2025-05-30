// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsFetchMetadataJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1000002
   */
  scanId?: number;
  static names(): { [key: string]: string } {
    return {
      scanId: 'scanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

