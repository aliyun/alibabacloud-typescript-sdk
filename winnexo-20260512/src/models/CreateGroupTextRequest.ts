// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupTextRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the AI assistant.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * ProjectResources
   */
  name?: string;
  /**
   * @remarks
   * The source tags.
   * 
   * @example
   * example
   */
  sourceTags?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The message content for text messages.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  textContent?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      groupId: 'groupId',
      name: 'name',
      sourceTags: 'sourceTags',
      tenantId: 'tenantId',
      textContent: 'textContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      groupId: 'string',
      name: 'string',
      sourceTags: 'string',
      tenantId: 'string',
      textContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

