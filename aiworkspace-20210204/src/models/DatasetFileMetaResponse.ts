// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaResponse extends $dara.Model {
  /**
   * @remarks
   * The metadata ID of the dataset file.
   * 
   * This parameter is required.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df*******8a0d857b33296c59bf6
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * The description of the reason why the metadata operation failed.
   * 
   * This parameter is required.
   * 
   * @example
   * Not Found
   */
  result?: string;
  /**
   * @remarks
   * The file URI.
   * 
   * @example
   * oss://l*****-test/dataset/1653421.jpg
   */
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

