// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyServiceDocumentInfos extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to access the document.
   * 
   * @example
   * https://help.aliyun.com/zh/compute-nest/use-cases/deploy-an-sd-painting-service-instance?spm=a2c4g.11186623.0.i2
   */
  documentUrl?: string;
  /**
   * @remarks
   * The language that you use for the query. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      documentUrl: 'DocumentUrl',
      locale: 'Locale',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentUrl: 'string',
      locale: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

