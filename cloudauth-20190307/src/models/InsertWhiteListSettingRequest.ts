// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertWhiteListSettingRequest extends $dara.Model {
  /**
   * @remarks
   * ID number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * Unique identifier for real person authentication.
   * 
   * @example
   * shsf57a4e0d9981c3bd66dc754f3d3cd
   */
  certifyId?: string;
  /**
   * @remarks
   * Remark, with a length less than 32 characters.
   * 
   * @example
   * xxxxxx
   */
  remark?: string;
  /**
   * @remarks
   * Authentication scene ID. This ID is automatically generated after creating an authentication scene in the console. For instructions on how to create an authentication scene, see Adding an Authentication Scene.
   * 
   * @example
   * 100000xxxx
   */
  sceneId?: number;
  /**
   * @remarks
   * ServiceCode for the real person cloud product, value: **antcloudauth**.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Whitelist validity period in days (only supports 3, 7, 30).
   * 
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

