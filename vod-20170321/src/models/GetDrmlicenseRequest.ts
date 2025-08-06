// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDRMLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  CDMData?: string;
  certId?: string;
  DRMType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      CDMData: 'CDMData',
      certId: 'CertId',
      DRMType: 'DRMType',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CDMData: 'string',
      certId: 'string',
      DRMType: 'string',
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

