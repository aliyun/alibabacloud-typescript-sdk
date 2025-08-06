// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDRMCertInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  certId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

