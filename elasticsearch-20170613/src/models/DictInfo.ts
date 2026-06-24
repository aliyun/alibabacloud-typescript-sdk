// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DictInfo extends $dara.Model {
  /**
   * @remarks
   * The size of the dictionary file. Unit: bytes.
   * 
   * @example
   * 2782602
   */
  fileSize?: number;
  /**
   * @remarks
   * The name of the dictionary file. Requirements:
   * 
   * - Main dictionary or stopword list: one word per line, saved as a UTF-8 encoded DIC file. The file name can contain uppercase and lowercase letters, digits, and underscores, and cannot exceed 30 characters in length. Files with duplicate names are not allowed. The main dictionary file and the stopword file cannot share the same name.
   * - Synonym dictionary: one synonym expression per line, saved as a UTF-8 encoded TXT file.
   * - Alibaba dictionary: the file name must be aliws_ext_dict.txt. The file must be in UTF-8 format. Each line contains one word with no leading or trailing whitespace. Use UNIX or Linux line endings, where each line ends with 
   * . If the file is generated on a Windows system, use the dos2unix tool on a Linux machine to process the dictionary file before uploading it.
   * 
   * @example
   * aliws_ext_dict.txt
   */
  name?: string;
  /**
   * @remarks
   * The source type of the dictionary file. Valid values:
   * 
   * - OSS: Object Storage Service (OSS). Ensure that the OSS bucket has public-read permission.
   * - ORIGIN: open-source Elasticsearch
   * - UPLOAD: uploaded file.
   * 
   * @example
   * OSS
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the dictionary file. Valid values:
   * 
   * - STOP: stopword list
   * - MAIN: main dictionary
   * - SYNONYMS: synonym dictionary
   * - ALI_WS: Alibaba dictionary.
   * 
   * @example
   * ALI_WS
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

