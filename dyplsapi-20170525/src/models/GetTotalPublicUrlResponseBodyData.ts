// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTotalPublicUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The download URL of the recorded call.
   * 
   * >  The download URL of the recorded call is valid for 30 days.
   * 
   * @example
   * http://secret-axb-reco****cn-shanghai.aliyuncs.com/1000000820257625_66647243838006067251551752068865.mp3?Expires=1551****07&OSSAccessKeyId=LTAIP00vvvv****v&Signature=tK6Yq9KusU4n%2BZQWX****4/WmEA%3D
   */
  phonePublicUrl?: string;
  /**
   * @remarks
   * The download URL of the recorded ringing tone.
   * 
   * >  The download URL of the recorded ringing tone is valid for 30 days.
   * 
   * @example
   * http://secret-ab-reco****cn-shanghai.aliyuncs.com/1000000820257625_66647243838006067251551752068865.mp3?Expires=155175****&OSSAccessKeyId=LTAIP00vvv****vv&Signature=tK6Yq9KusU4n%2BZQW****g4/WmEA%3D
   */
  ringPublicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      phonePublicUrl: 'PhonePublicUrl',
      ringPublicUrl: 'RingPublicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phonePublicUrl: 'string',
      ringPublicUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

