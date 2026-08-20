// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * hangzhou-release-version-3-eventbridge-numeric-queue-fix-20260529
   */
  description?: string;
  /**
   * @remarks
   * The name of the digital human.
   * 
   * This parameter is required.
   * 
   * @example
   * sandbox-conversation-webpage-github-default-p32JG2
   */
  name?: string;
  /**
   * @remarks
   * The name of the digital human (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The folder ID.
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
   * 235454102432001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      parentDirectoryId: 'parentDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      operatingObjectName: 'string',
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

