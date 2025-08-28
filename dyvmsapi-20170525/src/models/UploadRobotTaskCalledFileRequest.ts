// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadRobotTaskCalledFileRequest extends $dara.Model {
  /**
   * @remarks
   * The called numbers. Separate multiple called numbers with commas (,).
   * 
   * > After you create a robocall task, you must upload called numbers in batches. You can upload up to 300,000 called numbers for each task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1370****000,1370****111
   */
  calledNumber?: string;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](~~CreateRobotTask~~) operation to obtain the ID of the robocall task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045****
   */
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The values of the variable in the text-to-speech (TTS) template, in the JSON format. The variable values specified by the TtsParam parameter must match the variable names specified by the TtsParamHead parameter.
   * 
   * *   If all the called numbers carry the same variable values, you can set the value of the number field to **all** and upload only one copy of the variable values.
   * *   If only some of the called numbers carry the same variable values, you can set the value of the number field to **all** for these called numbers and set the value of the number field and variable values for other called numbers based on your business requirements. The system preferentially selects the values that you set for the called numbers.
   * 
   * @example
   * [{"number":"1370****000","params":["xiaowang","xiaoli","xiaozhou"]}]
   */
  ttsParam?: string;
  /**
   * @remarks
   * The list of variable names carried in the robocall task, in the JSON format. The TtsParamHead parameter must be used together with the TtsParam parameter.
   * 
   * @example
   * ["name1","name2","name3"]
   */
  ttsParamHead?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ttsParam: 'TtsParam',
      ttsParamHead: 'TtsParamHead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      id: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ttsParam: 'string',
      ttsParamHead: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

