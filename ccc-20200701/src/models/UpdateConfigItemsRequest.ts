// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigItemsRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON-formatted string representing an array of configuration items. Each object in the array must contain a name to identify the configuration item and its value. You can use system-defined items (which have fixed names and customizable values, such as agent permissions to hang up or the ring no answer timeout) or create custom items.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"name":"ShowCalledID","value":"-1"},{"name":"ShowCalleeID","value":"1"},{"name":"AllowHangup","value":"0"},{"name":"AutoAnswerCall","value":"-1"},{"name":"AllowAudioDownload","value":"1"},{"name":"AllowChooseSignedSkillGroup","value":"1"}]
   */
  configItems?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the object to be configured.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  objectId?: string;
  /**
   * @remarks
   * The type of the object to be configured.
   * 
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

