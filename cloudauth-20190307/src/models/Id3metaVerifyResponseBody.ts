// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The identity verification result. Valid values:
   * 
   * - 1: verification is consistent.
   * - 2: verification is inconsistent.
   * - 3: no record found.
   * 
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @remarks
   * The face comparison score.
   * 
   * @example
   * {
   *  "verifyScore": 50.28594166529785
   * }
   */
  faceDetail?: string;
  /**
   * @remarks
   * The authoritative source verification details. Valid values:
   * 
   * - 101: authentication passed.
   * 
   * - 201: authentication failed. The name does not match the ID card number.
   * 
   * - 202: authentication failed. The person is suspected to be the ID holder.
   * 
   * - 203: authentication failed. No photo exists in the database.
   * 
   * - 204: authentication failed. The person is not the same individual.
   * 
   * - 205: authentication failed. Modeling of the image to be compared failed.
   * 
   * - 206: authentication failed. The image format is incorrect.
   * 
   * - 207: authentication failed. The uploaded image is too small. Upload a new image.
   * 
   * - 208: authentication failed. The quality of the uploaded portrait photo is poor. Upload a new photo.
   * 
   * - 301: no record found. The ID number does not exist in the database.
   * 
   * - 302: no record found. Verification cannot be performed.
   * 
   * @example
   * 101
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      faceDetail: 'FaceDetail',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      faceDetail: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id3MetaVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200 indicates success. Other values indicate failure.
   * 
   * **Important**
   * 
   * - This parameter indicates whether the API call is successful. For more information about return codes, see error codes.
   * - Check the business verification result in the fields of ResultObject.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * **Important**
   * 
   * This parameter only indicates whether the API call is abnormal.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF03****
   */
  requestId?: string;
  /**
   * @remarks
   * The result object.
   */
  resultObject?: Id3MetaVerifyResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: Id3MetaVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

