// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DetectSkinDiseaseAdvanceRequest extends $dara.Model {
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
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      urlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

