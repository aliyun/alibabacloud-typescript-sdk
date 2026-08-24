// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeFileUploadRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent or client source that initiates the call, such as codex, cursor, or openapi. Maximum length: 32 characters. Used only for statistics and does not participate in authentication, throttling, quota, or billing.
   * 
   * @example
   * codex
   */
  agentName?: string;
  /**
   * @remarks
   * The format of the file to be uploaded.
   * 
   * @example
   * pdf
   */
  fileFormat?: string;
  /**
   * @remarks
   * The region ID, such as cn-beijing.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      fileFormat: 'FileFormat',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      fileFormat: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

