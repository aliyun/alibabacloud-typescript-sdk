// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTranscription extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  playCode?: string;
  metaData?: { [key: string]: any };
  selfDirected?: boolean;
  static names(): { [key: string]: string } {
    return {
      playCode: 'playCode',
      metaData: 'metaData',
      selfDirected: 'selfDirected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playCode: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      selfDirected: 'boolean',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

