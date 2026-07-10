// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertWhiteListSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @remarks
   * The unique identifier of the ID Verification request.
   * 
   * @example
   * shsf57a4e0d9981c3bd66dc754f3d3cd
   */
  certifyId?: string;
  /**
   * @remarks
   * The remarks. The maximum length is 32 characters.
   * 
   * @example
   * xxxxxx
   */
  remark?: string;
  /**
   * @remarks
   * The verification scenario ID. This ID is automatically generated after you create a verification scenario in the console. For information about how to create a verification scenario, see Add a verification scenario.
   * 
   * @example
   * 100000xxxx
   */
  sceneId?: number;
  /**
   * @remarks
   * The ServiceCode of the ID Verification cloud service. Set this parameter to **antcloudauth**.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The number of days the whitelist entry is valid. Valid values: 3, 7, and 30.
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

