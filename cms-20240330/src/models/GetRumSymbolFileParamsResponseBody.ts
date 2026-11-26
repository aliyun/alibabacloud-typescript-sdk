// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumSymbolFileParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of signature parameters required for form upload, including key, policy, x-oss-signature-version, x-oss-credential, x-oss-date, and x-oss-signature. The signatures in the examples are for illustration purposes only and cannot be used for actual uploads. Use the complete parameters returned by the API operation.
   * 
   * @example
   * {"key":"user/workspace/service-id/1.0.0/build-1/bundle.js.map","policy":"eyJleHBpcmF0aW9uIjoiMjAyNi0wNi0wM1QxMjozMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W3siYnVja2V0IjoiYnVja2V0In0seyJ4LW9zcy1zaWduYXR1cmUtdmVyc2lvbiI6Ik9TUzQtSE1BQy1TSEEyNTYifSx7Ingtb3NzLWNyZWRlbnRpYWwiOiJBS0lERVhBTVBMRS8yMDI2MDYwMy9jbi1oYW5nemhvdS9vc3MvYWxpeXVuX3Y0X3JlcXVlc3QifSx7Ingtb3NzLWRhdGUiOiIyMDI2MDYwM1QxMjAwMDBaIn0sWyJlcSIsIiRrZXkiLCJ1c2VyL3dvcmtzcGFjZS9zZXJ2aWNlLWlkLzEuMC4wL2J1aWxkLTEvYnVuZGxlLmpzLm1hcCJdLFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLDEsNTI0Mjg4MDAwXV19","x-oss-signature-version":"OSS4-HMAC-SHA256","x-oss-credential":"AKIDEXAMPLE/20260603/cn-hangzhou/oss/aliyun_v4_request","x-oss-date":"20260603T120000Z","x-oss-signature":"0000000000000000000000000000000000000000000000000000000000000000"}
   */
  formData?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * request-1
   */
  requestId?: string;
  /**
   * @remarks
   * The form upload URL for directly uploading symbol files to OSS.
   * 
   * @example
   * https://bucket.oss-cn-hangzhou.aliyuncs.com
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      formData: 'formData',
      requestId: 'requestId',
      uploadUrl: 'uploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      requestId: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    if(this.formData) {
      $dara.Model.validateMap(this.formData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

