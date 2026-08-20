// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the AI assistant.
   * 
   * @example
   * recorder function
   */
  description?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * oklabs_tongyici
   */
  name?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * wd-lxykjnnw4lyl9eq
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 692318833855074
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parentDirectoryId: 'string',
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

