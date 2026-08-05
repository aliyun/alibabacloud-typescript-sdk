// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperienceDataResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The data content type.
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
   * 1729665694
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
   * @example
   * file
   */
  dataType?: boolean;
  /**
   * @remarks
   * The data content.
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
   * 1222212
   */
  id?: number;
  /**
   * @remarks
   * The data name.
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
   * The update time.
   * 
   * @example
   * 1729665694
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
      dataType: 'boolean',
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

export class CreateExperienceDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7ACFD0C5-61E4-5DEA-A995-8279BB99C7E4
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CreateExperienceDataResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateExperienceDataResponseBodyResult,
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

