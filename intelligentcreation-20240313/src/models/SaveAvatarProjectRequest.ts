// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SaveAvatarProjectRequestFrames } from "./SaveAvatarProjectRequestFrames";


export class SaveAvatarProjectRequest extends $dara.Model {
  /**
   * @example
   * 1000196
   */
  agentId?: string;
  bitRate?: string;
  frameRate?: string;
  frames?: SaveAvatarProjectRequestFrames[];
  /**
   * @example
   * CREATE
   */
  operateType?: string;
  /**
   * @example
   * 787594567117586432
   */
  projectId?: string;
  /**
   * @example
   * df_cs_471437
   */
  projectName?: string;
  /**
   * @example
   * STANDARD
   */
  resSpecType?: string;
  resolution?: string;
  /**
   * @example
   * 9:16
   */
  scaleType?: string;
  scriptModelTag?: string;
  synchronizedDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      bitRate: 'bitRate',
      frameRate: 'frameRate',
      frames: 'frames',
      operateType: 'operateType',
      projectId: 'projectId',
      projectName: 'projectName',
      resSpecType: 'resSpecType',
      resolution: 'resolution',
      scaleType: 'scaleType',
      scriptModelTag: 'scriptModelTag',
      synchronizedDisplay: 'synchronizedDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      bitRate: 'string',
      frameRate: 'string',
      frames: { 'type': 'array', 'itemType': SaveAvatarProjectRequestFrames },
      operateType: 'string',
      projectId: 'string',
      projectName: 'string',
      resSpecType: 'string',
      resolution: 'string',
      scaleType: 'string',
      scriptModelTag: 'string',
      synchronizedDisplay: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

