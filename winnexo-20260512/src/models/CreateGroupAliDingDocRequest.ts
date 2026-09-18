// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupAliDingDocRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the AI assistant.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The publicly accessible URL of the Alibaba DingTalk online document.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * user_paswd_104
   */
  name?: string;
  /**
   * @remarks
   * The resource tags. This parameter is optional. Specify a JSON string list, such as ["tagA","tagB"].
   * 
   * @example
   * ["Customer","GroupChat"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      filePublicUrl: 'filePublicUrl',
      groupId: 'groupId',
      name: 'name',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      filePublicUrl: 'string',
      groupId: 'string',
      name: 'string',
      sourceTags: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

