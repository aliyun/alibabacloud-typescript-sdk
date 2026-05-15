// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentKnowledgeBaseRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * KnowledgeBaseTest
   */
  description?: string;
  /**
   * @example
   * kb-HZ-ra99********ss0xp1bku
   */
  fromKbUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * KnowledgeBaseTest
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8i5tw7omgaax*********n909jid
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      description: 'Description',
      fromKbUuid: 'FromKbUuid',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      description: 'string',
      fromKbUuid: 'string',
      name: 'string',
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

