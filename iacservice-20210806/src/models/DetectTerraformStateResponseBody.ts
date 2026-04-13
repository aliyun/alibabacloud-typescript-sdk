// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectTerraformStateResponseBody extends $dara.Model {
  /**
   * @example
   * job-dcsdxxxxxx
   */
  detectionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BF75EF50-955D-5E1F-AB23-A657C2C6D3C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectionId: 'detectionId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

