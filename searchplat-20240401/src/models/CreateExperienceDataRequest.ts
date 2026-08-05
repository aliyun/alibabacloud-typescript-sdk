// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperienceDataRequest extends $dara.Model {
  /**
   * @remarks
   * The data content type. Valid values:
   * - pdf
   * - text
   * - html
   * - doc.
   * 
   * @example
   * text
   */
  contentType?: string;
  /**
   * @remarks
   * The data size.
   * 
   * @example
   * 100
   */
  dataSize?: number;
  /**
   * @remarks
   * The data type. Valid values:
   * - file: file
   * - url: URL.
   * 
   * @example
   * file
   */
  dataType?: string;
  /**
   * @remarks
   * The data content.
   * - If dataType is set to file, this field specifies the OSS address of the file.
   * - If dataType is set to url, this field specifies the HTTP URL of the data.
   * 
   * @example
   * https://xxx
   */
  dataValue?: string;
  /**
   * @remarks
   * The data name. This parameter is required when dataType is set to file.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * document-analyze
   */
  serviceType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      dataSize: 'dataSize',
      dataType: 'dataType',
      dataValue: 'dataValue',
      name: 'name',
      serviceType: 'serviceType',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dataSize: 'number',
      dataType: 'string',
      dataValue: 'string',
      name: 'string',
      serviceType: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

