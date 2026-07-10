// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for ID Verification.
   * Obtain this value by calling InitAuthVerify to initiate an OCR request.
   * 
   * This parameter is required.
   * 
   * @example
   * shsf57a4e0d9981c3bd66dc754f3d3cd
   */
  certifyId?: string;
  /**
   * @remarks
   * The authentication scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000****
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

