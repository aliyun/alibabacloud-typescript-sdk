// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstanceResponseBodyResultSynonymsDicts extends $dara.Model {
  /**
   * @remarks
   * The size of the Dictionary File. Unit: bytes.
   * 
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the dictionary file.
   * 
   * @example
   * SYSTEM_MAIN.dic
   */
  name?: string;
  /**
   * @remarks
   * The source type. Valid values:
   * 
   * *   OSS:OSS open storage (the OSS storage space must be publicly readable.)
   * *   ORIGIN: open-source Elasticsearch
   * *   UPLOAD
   * 
   * @example
   * ORIGIN
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary. Valid values:
   * 
   * *   STOP: The STOP word.
   * *   MAIN: MAIN Dictionary
   * *   SYNONYMS: SYNONYMS
   * *   ALI_WS: an Alibaba Dictionary.
   * 
   * @example
   * STOP
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

