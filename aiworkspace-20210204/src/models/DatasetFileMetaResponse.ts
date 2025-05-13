// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaResponse extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  result?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetaId: 'DatasetFileMetaId',
      result: 'Result',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetaId: 'string',
      result: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

