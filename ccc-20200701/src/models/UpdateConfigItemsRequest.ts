// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigItemsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"name":"ShowCalledID","value":"-1"},{"name":"ShowCalleeID","value":"1"},{"name":"AllowHangup","value":"0"},{"name":"AutoAnswerCall","value":"-1"},{"name":"AllowAudioDownload","value":"1"},{"name":"AllowChooseSignedSkillGroup","value":"1"}]
   */
  configItems?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  objectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      configItems: 'ConfigItems',
      instanceId: 'InstanceId',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItems: 'string',
      instanceId: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

