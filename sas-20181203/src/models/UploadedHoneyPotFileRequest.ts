// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadedHoneyPotFileRequest extends $dara.Model {
  /**
   * @remarks
   * The FileKey used to upload the file.
   * > Format: HONEYPOT_FILE/{timestamp}_{custom_file_name}.
   * 
   * This parameter is required.
   * 
   * @example
   * HONEYPOT_FILE/1601097845544644_********
   */
  fileKey?: string;
  /**
   * @remarks
   * The name of the uploaded file.
   * 
   * This parameter is required.
   * 
   * @example
   * trojan.zip
   */
  fileName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * This parameter is required.
   * 
   * @example
   * application/zip
   */
  fileType?: string;
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * This parameter is required.
   * 
   * @example
   * ruoyi
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The language type of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the honeypot management node.
   * > Call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to obtain this value.
   * 
   * @example
   * cc427e14-f257-4670-9d2b-d83bbbe*****
   */
  nodeId?: string;
  /**
   * @remarks
   * The template prompt corresponding to the uploaded file.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"help\\":\\".zip\\",\\"label\\":\\"file\\",\\"type\\":\\"file\\",\\"key\\":\\"ftpfiles.zip\\"}
   */
  templateExtra?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      fileName: 'FileName',
      fileType: 'FileType',
      honeypotImageName: 'HoneypotImageName',
      lang: 'Lang',
      nodeId: 'NodeId',
      templateExtra: 'TemplateExtra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      fileName: 'string',
      fileType: 'string',
      honeypotImageName: 'string',
      lang: 'string',
      nodeId: 'string',
      templateExtra: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

