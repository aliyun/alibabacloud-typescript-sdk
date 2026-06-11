// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * KnowledgeBaseTest
   */
  description?: string;
  /**
   * @remarks
   * The ID of the source industry knowledge base.
   * 
   * @example
   * kb-HZ-ra99********ss0xp1bku
   */
  fromKbUuid?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * KnowledgeBaseTest
   */
  name?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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

