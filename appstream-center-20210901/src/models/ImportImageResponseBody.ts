// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-xxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The image version ID.
   * 
   * @example
   * iv-xxx
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the API. A value of 200 indicates success. If the call fails, the corresponding error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The image identifiers returned for the import request.
   */
  data?: ImportImageResponseBodyData;
  /**
   * @remarks
   * The processing message returned by the API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * 8737D130-BFD0-5D51-96F6-C08EB1139A25
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * - true: successful.
   * - false: failed.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportImageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

