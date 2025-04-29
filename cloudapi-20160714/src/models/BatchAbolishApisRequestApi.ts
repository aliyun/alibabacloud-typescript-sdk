// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAbolishApisRequestApi extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 994f72dcdaf04af0b38022c65fdbd1ac
   */
  apiUid?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * ced5ab777f7b440398ea70e4470124de
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the environment.
   * 
   * @example
   * 979fd16250644d5b82173534f465ac77
   */
  stageId?: string;
  /**
   * @remarks
   * The name of the environment.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiUid: 'ApiUid',
      groupId: 'GroupId',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUid: 'string',
      groupId: 'string',
      stageId: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

