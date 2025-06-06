// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertWhiteListSettingRequest extends $dara.Model {
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * shsf57a4e0d9981c3bd66dc754f3d3cd
   */
  certifyId?: string;
  /**
   * @example
   * xxxxxx
   */
  remark?: string;
  /**
   * @example
   * 100000xxxx
   */
  sceneId?: number;
  /**
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @example
   * 30
   */
  validDay?: number;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      remark: 'Remark',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      validDay: 'ValidDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      remark: 'string',
      sceneId: 'number',
      serviceCode: 'string',
      validDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

