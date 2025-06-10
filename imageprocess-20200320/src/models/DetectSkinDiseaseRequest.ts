// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectSkinDiseaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0001
   */
  orgId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo
   */
  orgName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageprocess/DetectSkinDisease/DetectSkinDisease1.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

