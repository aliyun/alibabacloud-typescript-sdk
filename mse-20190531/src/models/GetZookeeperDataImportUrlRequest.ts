// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetZookeeperDataImportUrlRequest extends $dara.Model {
  /**
   * @remarks
   * RestResult
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zip
   */
  contentType?: string;
  /**
   * @remarks
   * The type of the file.
   * 
   * @example
   * mse_prepaid_public_cn-zvp2xzzkk06
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      contentType: 'ContentType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      contentType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

