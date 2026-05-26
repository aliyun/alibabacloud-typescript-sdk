// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillContentResponseBody extends $dara.Model {
  /**
   * @example
   * ---
   * name: alibabacloud-find-skills
   * description: "Search for official Alibaba Cloud Agent Skills based on user requirements"
   * ---
   * 
   * Agent Skill Body Content Here
   */
  content?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1764D64D-5262-55DA-BDBF-1F949B1B34F7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

