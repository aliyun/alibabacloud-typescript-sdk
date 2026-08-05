// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperienceDataResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The file type.
   * 
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
   * The creation time.
   * 
   * @example
   * 1745806839720
   */
  created?: number;
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
   * The data type.
   * 
   * - file
   * - url.
   * 
   * @example
   * file
   */
  dataType?: string;
  /**
   * @remarks
   * The data content.
   * 
   * - When dataType is set to file, this field is the OSS address of the file.
   * - When dataType is set to url, this field is the HTTP URL of the data.
   * 
   * @example
   * http://xxx
   */
  dataValue?: string;
  /**
   * @remarks
   * The data ID.
   * 
   * @example
   * 1877
   */
  id?: number;
  /**
   * @remarks
   * The data name. This parameter is required when dataType is set to file.
   * 
   * @example
   * a.pdf
   */
  name?: string;
  /**
   * @remarks
   * The service type.
   * 
   * - document-analyze.
   * 
   * @example
   * document-analyze
   */
  serviceType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1729684154
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      created: 'created',
      dataSize: 'dataSize',
      dataType: 'dataType',
      dataValue: 'dataValue',
      id: 'id',
      name: 'name',
      serviceType: 'serviceType',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      created: 'number',
      dataSize: 'number',
      dataType: 'string',
      dataValue: 'string',
      id: 'number',
      name: 'string',
      serviceType: 'string',
      updated: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperienceDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5950143C-B8F0-5758-A08A-66F302FD587F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetExperienceDataResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetExperienceDataResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

