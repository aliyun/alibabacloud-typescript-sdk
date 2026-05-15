// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataAgentKnowledgeBaseRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-HZ-rtl5lwx********q32d3ux
   */
  kbUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2dl4opo5vbh*******frxfsmw
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      kbUuid: 'KbUuid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      kbUuid: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

