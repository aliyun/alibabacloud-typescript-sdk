// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSynonymsDictsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The size of the dictionary file. Unit: bytes.
   * 
   * @example
   * 220
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the dictionary file.
   * 
   * @example
   * deploy_0.txt
   */
  name?: string;
  /**
   * @remarks
   * The source type of the dictionary file. Valid values:
   * 
   * *   OSS
   * *   ORIGIN
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The dictionary type. The value is fixed as SYNONYMS.
   * 
   * @example
   * SYNONYMS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

