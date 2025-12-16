// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * shsf57a4e0d9981c3bd66dc754f3d3cd
   */
  certifyId?: string;
  /**
   * @remarks
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

