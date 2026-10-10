// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupFileRequest extends $dara.Model {
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
   * The file record ID. This parameter is optional and corresponds to settings.file_record_id.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  fileRecordId?: string;
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
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * Project Files
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
      fileRecordId: 'fileRecordId',
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
      fileRecordId: 'string',
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

