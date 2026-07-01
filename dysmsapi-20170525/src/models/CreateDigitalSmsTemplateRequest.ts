// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalSmsTemplateRequestTemplateContents extends $dara.Model {
  /**
   * @remarks
   * The file content, converted to a Base64 string. The file must be UTF-8 encoded before the Base64 conversion.
   * 
   * @example
   * 字符
   */
  fileContents?: string;
  /**
   * @remarks
   * The file name without the extension.
   * 
   * @example
   * file-1
   */
  fileName?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 1840901
   */
  fileSize?: number;
  /**
   * @remarks
   * The file suffix. Supported formats are `txt` for text; `gif`, `jpg`, and `png` for images; `mp3` for audio; and `mp4` for video. You can upload only one video file per template.
   * 
   * @example
   * txt
   */
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      fileContents: 'FileContents',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContents: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The application description. Describe your business use case for the template.
   * 
   * This parameter is required.
   * 
   * @example
   * ***业务需要
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * 签名
   */
  signName?: string;
  /**
   * @remarks
   * An array of objects that define the template content.
   * 
   * This parameter is required.
   */
  templateContents?: CreateDigitalSmsTemplateRequestTemplateContents[];
  /**
   * @remarks
   * The template name. The name can contain up to 20 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * ****模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      templateContents: 'TemplateContents',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      templateContents: { 'type': 'array', 'itemType': CreateDigitalSmsTemplateRequestTemplateContents },
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateContents)) {
      $dara.Model.validateArray(this.templateContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

